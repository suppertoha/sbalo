$(document).ready(function () {


  console.log('okkkkkkkk')


  //! Color svg

  //$('img.img-svg').each(function () {
  //  var $img = $(this);
  //  var imgClass = $img.attr('class');
  //  var imgURL = $img.attr('src');
  //  $.get(
  //    imgURL,
  //    function (data) {
  //      var $svg = $(data).find('svg');
  //      if (typeof imgClass !== 'undefined') {
  //        $svg = $svg.attr('class', imgClass + ' replaced-svg');
  //      }
  //      $svg = $svg.removeAttr('xmlns:a');
  //      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
  //        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
  //      }
  //      $img.replaceWith($svg);
  //    },
  //    'xml',
  //  );
  //});


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

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

});

