 ;(function(){
   $('.ba-portfolio-slider-txt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.ba-portfolio-slider-img'
  });
   $('.ba-portfolio-slider-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.ba-portfolio-slider-txt',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:false,
  });
 })(jQuery);

