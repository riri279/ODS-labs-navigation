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
 })();