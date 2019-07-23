var $animation_elements = $('.animate-elem');
var $window = $(window);
var delay_timer = 0;
var delay_ms = 200; // how many seconds to wait between elements

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    // check to see if this current container is within viewport
    if (element_bottom_position >= window_top_position 
      && element_top_position <= window_bottom_position 
      && !$(this).hasClass('in-view-trans')
      && !$(this).hasClass('in-view')) {
      
      $(this).addClass('in-view-trans');

      // stagger animations in view
      $element.delay(delay_timer).queue(function () {
        delay_timer -= delay_ms;
        delay_timer = Math.max(0, delay_timer);
        $(this).addClass('in-view');
        $(this).removeClass('in-view-trans');
        $.dequeue($(this));
      });

      delay_timer += delay_ms;
    }
    else {
      // if user scrolls fast down before element animates in
      // reduce delay to items in view pop up faster
      if ($(this).hasClass('in-view-trans')) {
        delay_timer -= delay_ms;
        delay_timer = Math.max(0, delay_timer);
      }
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');