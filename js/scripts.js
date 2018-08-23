(function() {
    //main navigation toggle
    $('#main-navigation-button').on('click', function() {
        $('#main-navigation').toggleClass('main-nav-open');
        $('#search-popup').slideUp();
    })


    //search bar appears on search icon click
    $('#search-icon').on('click', function() {
        $('#main-navigation').removeClass('main-nav-open');
        $('#search-popup').slideToggle();
        $('main').toggleClass('search-popup-active');
    });

    //search bar closes on search icon close click
    $('.close a').on('click', function() {
        $('#search-popup').slideUp();
        $('main').removeClass('search-popup-active');
    });

    //in this section toggle
    $('.in-this-section a').on('click', function() {
        $('.in-this-section ul').slideToggle();
        $('.in-this-section a span').toggleClass('open')
    })

    // $('#osap-help-button').on('click', function() {
    //     $(".osap-help-menu").toggleClass("hide");
    //     $(".osap-account-menu").addClass("hide");
    // })

    // $('#osap-account-button').on('click', function() {
    //     $(".osap-account-menu").toggleClass("hide");
    //     $(".osap-help-menu").addClass("hide");
    // })

    // $('#osap-nav > ul > li > a').on('click', function() {
    //     $("#osap-nav ul.sub-nav-osap.open").removeClass('open')
    //     $(this).next().toggle();
    // })

    $('#osap-account').on('click', function() {
        $("#help").parent().find('.sub-nav-osap').hide();
        $(this).parent().find('.sub-nav-osap').toggle();
    })

    $('#help').on('click', function() {
        $('#osap-account').parent().find('.sub-nav-osap').hide();
        $(this).parent().find('.sub-nav-osap').toggle();
    })

    $('#osap-nav-mobile-button').on('click', function() {
        $('#osap-nav-mobile').toggle();
    })
 })();