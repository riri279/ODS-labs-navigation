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


    //desktop mobile renew drivers licence
	var counter = 1;

	$('.renewal-side-nav-link').on('click', function() {
        openPage($(this).attr("goto"));
        setChecks($(this).attr("goto"));
    })

	$('.renewal-button').on('click', function() {
    	openPage($(this).attr("goto"));
    	setChecks($(this).attr("goto"));
	})

	function openPage(id){
		$('.renewal-page').each(function(){
			$(this).addClass("hide");
		});
		$('#page' + id).removeClass("hide");

		$('.renewal-side-nav-link').each(function(){
			$(this).removeClass("renewal-current");
			if ($(this).attr("goto") == id){
				$(this).addClass("renewal-current");
			}
		});
	}

	function setChecks(id){
		$('.renewal-side-nav-link').each(function(){
			if(parseInt($(this).attr("goto")) < parseInt(id)){
				$("img", this).removeClass("hide");
			}else{
				$("img", this).addClass("hide");
			}
		});
	}

 })();
