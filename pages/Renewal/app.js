(function() {

    //accordions on mobile renew drivers licence
    $('.mobile-form-content .mobile-next').on('click', function() {
        var mobileFormContent = $(this).parent().parent().parent();
        var mobileFormSection = $(this).parent().parent().parent().parent();
        $(mobileFormSection).find('.checkmark').toggle();
        $(mobileFormContent).slideToggle();
        $(mobileFormSection).next().find('.mobile-form-content').slideToggle();
    })

    $('.mobile-form-content .mobile-previous').on('click', function() {
        var mobileFormContent = $(this).parent().parent().parent();
        var mobileFormSection = $(this).parent().parent().parent().parent();
        $(mobileFormContent).slideToggle();
        $(mobileFormSection).prev().find('.mobile-form-content').slideToggle();
        $(mobileFormSection).prev().find('.checkmark').toggle();
    })
})();