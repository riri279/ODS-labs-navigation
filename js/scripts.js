(function() {
    $(document).foundation({
        offcanvas : {
          // Sets method in which offcanvas opens.
          // [ move | overlap_single | overlap ]
          open_method: 'move', 
          // Should the menu close when a menu link is clicked?
          // [ true | false ]
          close_on_click : false
        }
      });

      $(document).foundation({
        "magellan-expedition": {
            active_class: 'active', // specify the class used for active sections
            threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
            destination_threshold: 20, // pixels from the top of destination for it to be considered active
            throttle_delay: 50, // calculation throttling to increase framerate
            fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
            offset_by_height: false// whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
        }
    });

    //on click of dropdown arrow, toggle open sub-nav
    $('.dropdown-button').on('click', function() {
        var parent = $(this).parent().parent();
        $(this).parent().toggleClass('active');
        $('img', this).toggleClass('active')
        var subNav = parent.find('.sub-nav');
        subNav.slideToggle();
    })

    //on click of hamburger nav
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('#navigation').slideToggle();
    });

    $('#menuButton').on('click', function() {
        $('.navigation-index').slideToggle()
    })
    

    //make sure nav is open when screen is bigger than 640px
    function check() {
        if ($(window).width() > 639) {
            $('#navigation').show();
            $('#nav-icon').removeClass('open');
            $('#navigation').addClass('is-mobile');
            $('#navigation').attr('data-magellan-expedition', 'fixed');
        } else {
            $('#navigation').hide();
            $('#navigation').removeClass('is-mobile')
            $('#navigation').removeAttr('data-magellan-expedition')
        }
    }

    check();
    
    $(window).resize(function() {
        check();
    });

    

 })();