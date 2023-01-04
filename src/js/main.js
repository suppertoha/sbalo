$(document).ready(function () {

  $('.js-button--delivery').on('click', function () {
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

  //ymaps.ready(function () {
  //  var myMap = new ymaps.Map('map', {
  //          center: [55.751574, 37.573856],
  //          zoom: 9
  //      }, {
  //          searchControlProvider: 'yandex#search'
  //      }),

  //      // Создаём макет содержимого.
  //      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //      ),

  //      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //          hintContent: 'Собственный значок метки',
  //          balloonContent: 'Это красивая метка'
  //      }, {
  //          // Опции.
  //          // Необходимо указать данный тип макета.
  //          iconLayout: 'default#image',
  //          // Своё изображение иконки метки.
  //          iconImageHref: 'images/myIcon.gif',
  //          // Размеры метки.
  //          iconImageSize: [30, 42],
  //          // Смещение левого верхнего угла иконки относительно
  //          // её "ножки" (точки привязки).
  //          iconImageOffset: [-5, -38]
  //      }),

  //      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
  //          hintContent: 'Собственный значок метки с контентом',
  //          balloonContent: 'А эта — новогодняя',
  //          iconContent: '12'
  //      }, {
  //          // Опции.
  //          // Необходимо указать данный тип макета.
  //          iconLayout: 'default#imageWithContent',
  //          // Своё изображение иконки метки.
  //          iconImageHref: 'images/ball.png',
  //          // Размеры метки.
  //          iconImageSize: [48, 48],
  //          // Смещение левого верхнего угла иконки относительно
  //          // её "ножки" (точки привязки).
  //          iconImageOffset: [-24, -24],
  //          // Смещение слоя с содержимым относительно слоя с картинкой.
  //          iconContentOffset: [15, 15],
  //          // Макет содержимого.
  //          iconContentLayout: MyIconContentLayout
  //      });

  //  myMap.geoObjects
  //      .add(myPlacemark)
  //      .add(myPlacemarkWithContent);
  //});
  
  
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

  //$('.select__item').on('click', function () {
    
  //  $(".select__item").removeClass("active");

  //})

  $(document).click(function (e) {
      if (!$(e.target).closest(".select").length) {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
      }
  });


  const sliderRecommended = new Swiper('.slider-recommended__container', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		loop: true,
		navigation: {
			nextEl: '.slider-recommended__next.swiper-button-next',
			prevEl: '.slider-recommended__prev.swiper-button-prev',
		},

		breakpoints: {
			767: {
				slidesPerView: 'auto',
			},
			940: {
				slidesPerView: 2,
			},

			1110: {
				slidesPerView: 3,
			},
		},
	})

});

