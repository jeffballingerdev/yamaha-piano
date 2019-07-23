$(function () {

  // -- start grands hover

  // top level hover
  $('#grands-baby').hover(function () {
    $('#desktop-grands .item').removeClass('active');
    $(this).addClass('active');

    $('#gb1k-tile, #cx-tile').find('.uk-position-cover').removeClass('darken');
    $('#sx-tile, #cf-tile').find('.uk-position-cover').addClass('darken');
  });
  
  $('#grands-classic, #grands-concert').hover(function () {
    $('#desktop-grands .item').removeClass('active');
    $(this).addClass('active');

    $('#cx-tile, #sx-tile, #cf-tile').find('.uk-position-cover').removeClass('darken');
    $('#gb1k-tile').find('.uk-position-cover').addClass('darken');
  });

  // image hover
  $('#gb1k-tile').hover(function () {
    $('#cx-tile, #sx-tile, #cf-tile').find('.uk-position-cover').addClass('darken');
    $('#gb1k-tile').find('.uk-position-cover').removeClass('darken');

    $('#desktop-grands .item').removeClass('active');
    $('#grands-baby').addClass('active');
  });

  $('#cx-tile').hover(function () {
    $('#gb1k-tile, #sx-tile, #cf-tile').find('.uk-position-cover').addClass('darken');
    $(this).find('.uk-position-cover').removeClass('darken');

    $('#desktop-grands .item').addClass('active');
  });

  $('#sx-tile').hover(function () {
    $('#gb1k-tile, #cx-tile, #cf-tile').find('.uk-position-cover').addClass('darken');
    $(this).find('.uk-position-cover').removeClass('darken');

    $('#desktop-grands .item').addClass('active');
    $('#grands-baby').removeClass('active');
  });

  $('#cf-tile').hover(function () {
    $('#gb1k-tile, #cx-tile, #sx-tile').find('.uk-position-cover').addClass('darken');
    $(this).find('.uk-position-cover').removeClass('darken');

    $('#desktop-grands .item').addClass('active');
    $('#grands-baby').removeClass('active');
  });

  // -- end grands

  $('#piano-pg .switchable').click(function () {
    $('#piano-pg .switchable').removeClass('uk-active');
    $(this).addClass('uk-active');
  });
  
  $('#piano-pg .finish-hover-row img').hover(function () {
    // show finish name
    $(this).parent('.finish-hover-row').prev('.hovered-color').find('.finish-name').text($(this).attr('title'));

    // show hovered image
    if ($(this).hasClass('hover-img') && $(this).attr('data-src'))
      $(this).parent('.finish-hover-row').closest('.uk-section').find('.main-image img').attr('src', $(this).attr('data-src'));
  });
});