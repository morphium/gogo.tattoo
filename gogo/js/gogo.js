/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 $.fn.randomize = function(selector){
     var $elems = selector ? $(this).find(selector) : $(this).children(),
         $parents = $elems.parent();

     $parents.each(function(){
         $(this).children(selector).sort(function(){
             return Math.round(Math.random()) - 0.5;
         // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
         }).detach().appendTo(this);
     });

     return this;
 };

 function zoomImage()
 {
     $("body").css("background-image","url('images/test.png')"); // Onclick of button the background image of body will be test here. Give the image path in url
     $('#clickbutton').hide(); //This will hide the button specified in html
 }

(function($) {
    "use strict"; // Start of use strict

    $('#Fullscreen').css('height', $(document).outerWidth() + 'px');
        //for when you click on an image
    $('.tattoo-image').click(function () {
        var src = $(this).attr('src'); //get the source attribute of the clicked image
        $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#Fullscreen').fadeIn();
    });
    $('#Fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image.
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    $('ul.tags').randomize();
    $('ul.tags li').hide().slice(0, 9).show();
    $('ul.tags').fadeIn().css("display","inline-block");

})(jQuery); // End of use strict
