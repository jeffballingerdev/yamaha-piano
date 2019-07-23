$('#piano-pg ul.navbar-nav > li > a').click(function () {
  if ($(this).attr('href') 
  && $(this).attr('href') !== "#")
    window.location = $(this).attr('href');
});

// mobile nav toggle button toggled open
$('#navbarSupportedContent').on('show.bs.collapse', function () {
  // open up all the menu items so they can be displayed vertically
  $('.navbar-nav .dropdown-menu').removeClass('fade').addClass('show');
});

$('#piano-pg .navbar-nav > li > a').mouseenter(function () {
  $('#piano-pg .navbar-nav > li').removeClass('hovered');
  $(this).parent('li').addClass('hovered');
  openPianoPgNavMenu($(this));
});

$('#piano-pg nav').on('mouseleave', function() {
  if (window.innerWidth > 991) {
    closePianoPgNavMenus();
  }
});

// hide nav sub menu underline
$('#piano-pg .navbar-nav > li.dropdown').on('hide.bs.dropdown', function () {
  $(this).removeClass('hovered');
});

// show nav sub menu underline
$('#piano-pg .navbar-nav > li.dropdown').on('show.bs.dropdown', function () {
  $(this).addClass('hovered');
});

function checkPianoPgWindowSize() {
  if (window.innerWidth <= 991) {
    // open up all the menu items so they can be displayed vertically
    $('#piano-pg .navbar-nav .dropdown-menu').removeClass('fade').addClass('show');
    // $('.navbar').removeClass('sticky-top');
  }
  else {
    // close all dropdowns incase we are scrolling up from mobile size
    closePianoPgNavMenus();
  }
  setPianoPgStickyNav();
}

function closePianoPgNavMenus() {
  // fade close used for transition animation
  $('#piano-pg .navbar-nav .dropdown-menu').addClass('fade');
  // force boostrap drop downs to close
  $('#piano-pg .navbar-nav > li.dropdown').removeClass('open').removeClass('show');
  // remove nav bar hovered item underline
  $('#piano-pg .navbar-nav > li').removeClass('hovered');
}

function openPianoPgNavMenu(elem) {
  // if on mobile, do nothing
  if (window.innerWidth <= 991)
    return;

  closePianoPgNavMenus();

  // we've hovered over or clicked on a nav drop down
  if ($(elem).parent().hasClass('dropdown')) {
    // targeted drop down is not open
    if (!$(elem).parent().hasClass('show')) {
      $(elem).dropdown('toggle');
      $(elem).next('.dropdown-menu').removeClass('fade');
    }
  } 
  else {
    $(elem).parent().addClass('hovered');
  }
}

function setPianoPgStickyNav() {
  if ($(window).scrollTop() >= 100) {
    if (!$('#piano-pg .navbar').hasClass('sticky-top')) {
      
      $('#piano-pg .navbar').addClass('transition');
      setTimeout(function () {
        $('#piano-pg .navbar').addClass('sticky-top');
        $('#piano-pg .navbar').removeClass('transition');
      }, 100);
      
    }
  }
  else {
    $('#piano-pg .navbar').removeClass('sticky-top');
  }
}

$(window).resize(checkPianoPgWindowSize);
$(window).scroll(setPianoPgStickyNav);

setPianoPgStickyNav();
checkPianoPgWindowSize();

$(function () {
  // kill weird tick where active nav item underline 
  // first appears to the left then jumps in place
  setTimeout(function () {
    $('#piano-pg .navbar-nav > li.active').addClass('go');
  }, 50);
});