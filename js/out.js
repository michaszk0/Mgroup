$(function() {
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

  //pojawienie sie logo i zmiana tała menu po scrollowaniu
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.logo').fadeIn();
      $('.main').addClass('header-down');
    } else {
      $('.logo').fadeOut();
      $('.main').removeClass('header-down');
    }
  });

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

// ======
$('.owl-dots').hide();
// ======


$('body').append('<div class="product-image-overlay"><span class="product-image-overlay-close">x</span><img class="img" src="" /></div>');
var productImage = $('.bigger');
var productOverlay = $('.product-image-overlay');
var productOverlayImage = $('.product-image-overlay img');

productImage.on('click', function () {
    var productImageSource = $(this).next().children().attr('src');
    var productImageImg = $(this).next().children();
    productOverlayImage.attr('src', productImageSource);
    console.log(productImageSource);
    productOverlay.fadeIn(400);
    productOverlayImage.css('width','600px');
    $('body').css('overflow', 'hidden');

    $('.product-image-overlay-close').click(function () {
        productOverlay.fadeOut(200);
        $('body').css('overflow', 'auto');
    });
});

});
