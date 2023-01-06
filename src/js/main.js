$(document).ready(function () {

  //! ButtonDelivery
  function buttonDelivery() {
    $('.js-button--delivery').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.js-form--delivery').toggleClass('active');
    });
  
    $('.close-button').on('click', function () {
      $(this).toggleClass('active');
      $('.js-form--delivery').removeClass('active');
    });
  
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.js-button--delivery, .js-form--delivery').length) {
        $('.js-form--delivery').removeClass('active');
        $('.js-button--delivery').removeClass('active');
      }
      e.stopPropagation();
    });
  }
  buttonDelivery()

  //! InputMain
  function inputMain() {
    $('.inputMain').on('click', function (e) {
      $('.inputMain').removeClass('active');
      $(this).toggleClass('active');
    });
  
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.inputMain').length) {
        $('.inputMain').removeClass('active');
      }
      e.stopPropagation();
    });
  }
  inputMain()

  //! Checkbox
  function checkbox() {
    $.each($('.checkbox'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active')
      }
    })
    $(document).on('click', '.checkbox', function (event) {
      if ($(this).hasClass('active')) {
        $(this).find('input').prop('checked', false);
      } else {
        $(this).find('input').prop('checked',true)
      }
      $(this).toggleClass('active')
      return false;
    })
  }
  checkbox()

  //! Radio
  function radio() {
    $.each($('.radiobuttons__item'), function (index, val) {
      if($(this).find('input').prop('checked') == true) {
        $(this).addClass('active')
      }
    })
  
    $(document).on('click', '.radiobuttons__item', function (event) {
      $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active')
      $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false)
      $(this).toggleClass('active')
      $(this).find('input').prop('checked', true)
      return false;
    })
  }
  radio()

  function selectMain() {
    $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).next().fadeOut();
      } else {
        $(".select__head").removeClass("open");
        $(".select__list").fadeOut();
        $(this).addClass("open");
        $(this).next().fadeIn();
      }
    });
  
    $(".select").on("click", ".select__item", function () {
      $(this).prev($(this).removeClass("active"));
      $(".select__head").removeClass("open");
      $(this).addClass("active");
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
    });
  
    $('.select__item').on('click', function () {
      $(this).siblings().removeClass("active");
    })
  }
  selectMain()

  function sld() {
  let widthSlide = $('body').width();
  if (widthSlide >= 991) {
    const sliderRecommended = new Swiper('.slider-recommended__container', {
      slidesPerView: 'auto',
      spaceBetween: 1,
      loop: true,
      navigation: {
        nextEl: '.slider-recommended__next.swiper-button-next',
        prevEl: '.slider-recommended__prev.swiper-button-prev',
      },
  
      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    })
  }
}

sld();

$(window).resize(function () {
  scrollSwiper.update();
}); 

//$(window).resize(sld);

  const inp=document.getElementsByTagName('input');
    for(let i=0;i<inp.length;i++){
    inp[i].setAttribute('autocomplete','off');
  }

});

