(function() {
    //main navigation toggle
    $('#main-navigation-button').on('click', function() {
        $('#main-navigation').toggleClass('main-nav-open');
        $('main').toggleClass('search-popup-active')
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

    $('#osap-account').on('click', function() {
        $("#help").parent().find('.sub-nav-osap').hide();
        $(this).parent().find('.sub-nav-osap').toggle();
    })

    $('#help').on('click', function() {
        $('#osap-account').parent().find('.sub-nav-osap').hide();
        $(this).parent().find('.sub-nav-osap').toggle();
    })

    $('#osap-nav-mobile a').on('click', function() {
        $(this).parent().find('.sub-nav-osap').slideToggle();
    })

    $('#osap-nav-mobile-button').on('click', function() {
        $('#osap-nav-mobile').toggle();
    })

    //search functionality
    $('#search-ontario-ca').on('click', function() {
        $('#specific-page').hide();
        $('#ontario-ca').show();
        $('#search-specific-page').removeClass('active')
        $(this).addClass('active');

    })

    $('#search-specific-page').on('click', function() {
        $('#ontario-ca').hide();
        $('#specific-page').show();
        $('#search-ontario-ca').removeClass('active');
        $(this).addClass('active');
    })

    var items = [];
    //setting search in local storage
    $('#header-submit').on('click', function() {
        var searchInput = $("#header-search-input").val();
        var previousPage = $('.breadcrumbs .current a').text();
        // items.push(searchInput, previousPage);
        // localStorage.setItem("item", JSON.stringify(items));
        localStorage.setItem('searchTerm', searchInput);
        localStorage.setItem('pageName', previousPage);
        window.location.href = "https://demo-nav.ontariogovernment.ca/pages/search.html"
        console.log(searchInput)
        if (searchInput.val() === '') {
            $('search-title').text('No Search Term Entered!')
        }
    });


    //setting search page parameters
    var localStorageSearchTerm = localStorage.getItem('searchTerm');
    var localStoragePreviousPage = localStorage.getItem('pageName');
    $('#search-title-term').text(localStorageSearchTerm);
    if (localStoragePreviousPage === '') {
        $('#search-specific-page').hide();
    } else {
        $('#specific-page-term').text(localStoragePreviousPage);
    }

})();