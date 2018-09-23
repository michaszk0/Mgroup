$(function() {
  console.log("done");
  // $('.logo').addClass('hide').fadeIn();

  //hamburger menu
  $(".hamburger").click(function() {
    this.classList.toggle("change");
    $(".mobile").toggleClass("active");
  });

  //animacje
  $('*[data-animate]').addClass('hide').each(function() {
    $(this).viewportChecker({
      classToAdd: 'show animated ' + $(this).data('animate'),
      classToRemove: 'hide',
      offset: '30%'
    });
  });

  //od razu pojawienei się małego logo i przymocowanie górnego menu na stałe
      $('.logo').fadeIn();
      $('.main').addClass('header-down');

  //dodanie data-set w widoku mobilnym do menu - nie działa
  function sprawdzRozmiarOkna() {
    console.log("aa");
    if ($(window).width() < 996) {
      // $('.mobile').data('animate','fadeInUp');
      $('.mobile').data('animate','fadeInUp');
    } else {
      $('.mobile').data('animate','');
    }
  }
  $(window).resize(sprawdzRozmiarOkna);


  // OPACITY OF BUTTON SET TO 0%
$(".roll").css("opacity","0");

// ON MOUSE OVER
$(".roll").hover(function () {

// SET OPACITY TO 70%
$(this).stop().animate({
opacity: .7
}, "slow");
},

// ON MOUSE OUT
function () {

// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0
}, "slow");
});

// Option slider - nie dziala
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-dots').hide();


});
