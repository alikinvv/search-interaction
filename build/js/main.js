(function () {
    var check;  
    var $input = $('.search input');  
    var $text = $('.search p');
    var trigger = true;
  
    $input.click(function () {
      if (trigger) {
        $('.search').addClass('active');
      
        check = function() {
          var cur, oldVal;
          cur = $input.val();
          if (cur !== oldVal) {
            $text.text($input.val());
          }
          return oldVal = cur;
        };
      
        sentinel = setInterval(check, .1);
      }
    });

    $input.blur(function () {
      trigger = false;

      $input.val('');
      $text.text('');
      $('.search').addClass('remove');

      setTimeout(function () {
        $('.search').addClass('done');
        setTimeout(function () {
          $('.search').removeClass('active remove');

          setTimeout(function () {
            $('.search').removeClass('done');
            trigger = true;
          }, 100);
        }, 100);
      }, 800);
    });
  
  }).call(this);