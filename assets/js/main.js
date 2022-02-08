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
    // let navbarToggler = document.querySelector(".navbar-toggler");
    // navbarToggler.addEventListener('click', function() {
    //     navbarToggler.classList.toggle("active");
    // }) 


    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

    /*---canvas menu activation---*/

    const canvasToggler = document.querySelector(".canvas_open");
    const offcanvasMenuToggler = document.querySelector(".offcanvas_menu_wrapper");
    const bodyOverlayToggler = document.querySelector(".body_overlay");
    const canvasCloseToggler = document.querySelector(".canvas_close");

    canvasToggler.addEventListener('click', function() {
        console.log('canvas_open');
        bodyOverlayToggler.classList.add("active");
        offcanvasMenuToggler.classList.add("active");
    }) 

    canvasCloseToggler.addEventListener('click', function() {
        offcanvasMenuToggler.classList.remove("active");
        bodyOverlayToggler.classList.remove("active");
    }) 

    bodyOverlayToggler.addEventListener('click', function() {
        offcanvasMenuToggler.classList.remove("active");
        bodyOverlayToggler.classList.remove("active");
    }) 

    /*--$('.canvas_open').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });
    
    $('.canvas_close,.body_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });---*/

    function siblings(t) {
        var children = t.parentElement.children;
        var tempArr = [];
      
        for (var i = 0; i < children.length; i++) {
          tempArr.push(children[i]);
        }
      
        return tempArr.filter(function(e){
          return e != t;
        });
    }

    /*---Off Canvas Menu---*/
    let $offcanvasNav = document.querySelector(".offcanvas_main_menu"),
     $offcanvasNavSubMenu = $offcanvasNav.querySelector('.sub-menu');
    $offcanvasNavSubMenu.parentElement.prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    // $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parentElement.attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parentElement.toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

    $offcanvasNav.addEventListener('click', 'li a, li .menu-expand', () => {
        /** Slide down. */
        if(!container.classList.contains('active')) {
            /** Show the container. */
            container.classList.add('active')
            container.style.height = "auto"
            
            /** Get the computed height of the container. */
            var height = container.clientHeight + "px"
    
            /** Set the height of the content as 0px, */
            /** so we can trigger the slide down animation. */
            container.style.height = "0px"
    
            /** Do this after the 0px has applied. */
            /** It's like a delay or something. MAGIC! */
            setTimeout(() => {
                container.style.height = height
            }, 0) 
        
        /** Slide up. */
        } else {
            /** Set the height as 0px to trigger the slide up animation. */
            container.style.height = "0px"
            
            /** Remove the `active` class when the animation ends. */
            container.addEventListener('transitionend', () => {
                container.classList.remove('active')
            }, {once: true})
        }
    })

})();