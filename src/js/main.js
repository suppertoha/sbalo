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



});
