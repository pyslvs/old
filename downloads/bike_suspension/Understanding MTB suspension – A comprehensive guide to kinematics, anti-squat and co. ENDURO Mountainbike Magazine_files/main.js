(function($) {
    $(document).ready(function($) {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            $("body").on("touchstart", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });

            $("body").on("touchstart", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("touchstart", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });

        } else {

            $("body").on("click", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });


            $("body").on("click", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("click", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });
        }



    }); // end $(document).ready()

    /* Initialize tabs */

    $(window).on("load", function(){
        $('.mks_tabs').each(function(){
            mks_init_tabs($(this));
        });

        mks_tabs_check_switch( $('.mks_tabs') );
    });

    $(window).resize(function() {
        mks_tabs_check_switch( $('.mks_tabs'));
    });

    function mks_tabs_check_switch( obj ) {
        if ( !obj.length ) return;

        obj.each(function() {

            var tabs_holder = $(this);
            var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');

            if ( !tabs_holder.hasClass('mks-accordion-switched') ) {

                var tabs_width = mks_check_tabs_width( tabs_holder );
                if( tabs_width && !tabs_holder.hasClass('vertical')){
                    mks_tabs_to_accordion( tabs_holder, tabs_width );
                }

                var vertical_tabs_width = tabs_holder.hasClass('vertical') && tabs_nav_wrapper.width() < 80 ? tabs_holder.width() : false;
                if( vertical_tabs_width ){
                    mks_tabs_to_accordion( tabs_holder, vertical_tabs_width );
                }

            } else {

                if ( tabs_holder.hasClass('mks-accordion-switched') ) {
                    var resized_on = tabs_holder.attr('data-resized-on');
                    if(resized_on && resized_on < tabs_holder.width()){
                        mks_init_tabs( tabs_holder );
                    }
                }
            }

        });

    }

    function mks_init_tabs(obj){

            var tabs_holder = obj;
            var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');
            var tabs_content = tabs_holder.find('.mks_tab_item, .mks_accordion_item');

            tabs_holder.removeClass('mks_accordion mks-accordion-switched');
            tabs_holder.find('.mks_accordion_item, .mks_tab_item').remove();
            tabs_nav_wrapper.show();

            if ( tabs_holder.hasClass('vertical') ) {
                tabs_holder.css('padding' , '0 0 0 19.9%');
            } else {
                tabs_holder.css('padding' , '40px 0 0 0');
            }

            tabs_content.each(function(){
                tabs_nav_wrapper.append('<div class="mks_tab_nav_item">' + $(this).find('.nav').html() + '</div>');

                if ( $(this).hasClass('mks_accordion_item') ) {
                    tabs_holder.append('<div class="mks_tab_item" style="display:none;">' + $(this).find('.mks_accordion_content').html() + '</div>').hide();
                } else {
                    tabs_holder.append('<div class="mks_tab_item" style="display:none;">' + $(this).html() + '</div>').hide();
                }

            });

            tabs_nav_wrapper.find('.mks_tab_nav_item:first').addClass('active');
            tabs_holder.find('.nav').hide();
            tabs_holder.find('.mks_tab_item:first').show();
            tabs_holder.show();


    }

    function mks_check_tabs_width(obj) {

        var tabs_nav_wrapper = obj.find('.mks_tabs_nav');
        var tabs_width = tabs_nav_wrapper.width();
        var tab = tabs_nav_wrapper.find('.mks_tab_nav_item');
        var tab_width = 0;

        tab.each(function(){
            tab_width += $(this).outerWidth();
        });

        if ( tabs_width <= tab_width + 24 ) {
            return tabs_width;
        }
        return false;
    }


    function mks_tabs_to_accordion( obj, resized_on ) {

        var tabs_holder = obj;
        var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');
        var tabs_content = tabs_holder.find('.mks_tab_item');

        tabs_holder.addClass('mks_accordion mks-accordion-switched').attr('data-resized-on', resized_on);
        tabs_holder.find('.mks_tab_item').remove();
        tabs_nav_wrapper.children().remove();
        tabs_nav_wrapper.hide();
        tabs_holder.css({
            'display' : 'block',
            'padding' : 0
        });

        tabs_content.each(function(){
            tabs_holder.append('<div class="mks_accordion_item"><div class="mks_accordion_heading">' + $(this).find('.nav').html() +
                '<i class="fa fa-plus"></i><i class="fa fa-minus"></i></div><div class="mks_accordion_content">' + $(this).html() + '</div></div>');
        });

        tabs_holder.find('.nav').hide();

    }

    function mks_accordion_handle($obj) {
        var toggle = $obj.parent('.mks_accordion_item');
        if (!toggle.hasClass('mks_accordion_active')) {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
            toggle.find('.mks_accordion_content').slideToggle("fast", function() {
                toggle.addClass('mks_accordion_active');
                if ((toggle.offset().top + 100) < $(window).scrollTop()) {
                    $('html, body').stop().animate({
                        scrollTop: (toggle.offset().top - 100)
                    }, '300');
                }
            });
        } else {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
        }
    }

    function mks_toggle_handle($obj) {
        var toggle = $obj.parent('.mks_toggle');
        toggle.find('.mks_toggle_content').slideToggle("fast", function() {
            toggle.toggleClass('mks_toggle_active');
        });
    }

    function mks_tab_handle($obj) {
        if ($obj.hasClass('active') === false) {

            tab_to_show = $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').index($obj);

            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').hide();
            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').eq(tab_to_show).show();

            $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').removeClass('active');
            $obj.addClass('active');

        }
    }

})(jQuery);