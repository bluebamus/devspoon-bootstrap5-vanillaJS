(function() {
    
    "use strict";
    
    //===== Prealoder

    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    
    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar");
        var sticky = header_navbar.offsetTop;
        // var logo = document.querySelector('.navbar-brand img')

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            // logo.src = 'assets/images/logo/logo-2.svg';
        } else {
            header_navbar.classList.remove("sticky");
            // logo.src = 'assets/images/logo/logo.svg';
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };

    // Get the navbar

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    }) 


    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

    /*---canvas menu activation---*/

    let canvasToggler = document.querySelector(".canvas_open"),
     offcanvasMenuToggler = document.querySelector(".offcanvas_menu_wrapper"),
     bodyOverlayToggler = document.querySelector(".body_overlay"),
     canvasCloseToggler = document.querySelector(".canvas_close");

    canvasToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
        offcanvasMenuToggler.classList.toggle("active");
    }) 

    canvasCloseToggler.addEventListener('click', function() {
        offcanvasMenuToggler.classList.toggle("active");
        bodyOverlayToggler.classList.toggle("active");
    }) 

    bodyOverlayToggler.addEventListener('click', function() {
        offcanvasMenuToggler.classList.toggle("active");
        bodyOverlayToggler.classList.toggle("active");
    }) 

    /*--$('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });
    
    $('.canvas_close,.body_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });---*/

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

})();