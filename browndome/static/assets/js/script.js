(function($) {
	
	"use strict";
	


$(function(){

    createSticky($("#headernew"));

  });

  function createSticky(sticky) {

    if (typeof sticky !== "undefined") {

      var pos = sticky.offset().top,
          win = $(window);

      win.on("scroll", function() {
          win.scrollTop() >= pos ? sticky.addClass("fixed-header") : sticky.removeClass("fixed-header");
      });     
    }
  }



  $(function () {
    $('.solubtn21').click(function() {

      $('.solubtn21').hide();
      $('.solubtn12').show();
      $('.sectione-2').fadeIn("slow");

    });
    $('.solubtn12').click(function() {

      $('.solubtn21').show();
      $('.solubtn12').hide();
      $('.sectione-2').fadeOut("slow");

    });
  });

// Three Item service
  if ($('.service-i-carousel').length) {
    $('.service-i-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      stagePadding: 8,
      smartSpeed: 500,
      autoplay: true,
      navText: [ '<span class="slid-new-left"><span>PREVIOUS</span> <i class="fa fa-caret-left" ></i></span>', '<span class="slid-new-right"><i class="fa fa-caret-right" ></i> <span>NEXT</span></span>' ],
      responsive:{
        0:{
          items:2
        },
        600:{
          items:3
        },
        800:{
          items:3
        },
        1024:{
          items:4
        },
        1100:{
          items:4
        },
        1200:{
          items:4
        }
      }
    });       
  }

// Three Item clients-carousel
  if ($('.clients-carousel').length) {
    $('.clients-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      stagePadding: 0,
      smartSpeed: 500,
      autoplay: true,
      navText: [ '<span class="slid-new-left"><i class="fa fa-caret-left" ></i></span>', '<span class="slid-new-right"><i class="fa fa-caret-right" ></i></span>' ],
      responsive:{
        0:{

          items:2

        },
        600:{
          items:3
        },
        800:{
          items:4
        },
        1024:{
          items:6
        },
        1100:{
          items:6
        },
        1200:{
          items:6
        }
      }
    });
  }


  // Three Item key-people-carousel
  if ($('.key-people-carousel').length) {
    $('.key-people-carousel').owlCarousel({
      loop:true,
      nav:true,
      smartSpeed: 500,
      touchDrag: false,
      mouseDrag: false,
      autoplay: true,
      navText: [ '<span class="slid-new-left"><span>PREVIOUS</span> <i class="fa fa-caret-left" ></i></span>', '<span class="slid-new-right"><i class="fa fa-caret-right" ></i> <span>NEXT</span></span>' ],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1100:{
          items:1
        },
        1200:{
          items:1
        }
      }
    });
  }



})(window.jQuery);