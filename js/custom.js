   $("input[name$='cars']").click(function() {
       var test = $(this).val();

       $("div.desc").hide();
       $("#Cars" + test).show();
   });
   // ------------
   $("#btn-mob-menu").click(function() {
       $(".small-screen-menu").toggleClass("show");
       $(this).toggleClass("nav-xs-menu");
       $("body").toggleClass("overflow-none");
   });
   $('.mn-section-bd').click(function() {
       if ($('.small-screen-menu').hasClass('show')) {
           $('.small-screen-menu').removeClass('show');
       }
       if ($('#btn-mob-menu').hasClass('nav-xs-menu')) {
           $('#btn-mob-menu').removeClass('nav-xs-menu');
       }
       if ($('body').hasClass('overflow-none')) {
           $('body').removeClass('overflow-none');
       } else {

       }
   });

   // ------------

   $('#banner, #reviews, #banner-small-screen').owlCarousel({
       loop: true,
       margin: 10,
       nav: true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 1
           },
           1000: {
               items: 1
           }
       }
   })
   // ------------
   $(' #owl-demo, #offers').owlCarousel({
       loop: true,
       margin: 20,
       nav: true,
       dots:true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 3
           },
           1000: {
               items: 4
           }
       }
   })

   // ------------
    $('#partners, #clients').owlCarousel({
       loop: true,
       margin: 20,
       nav: true,
       dots:true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 3
           },
           1000: {
               items: 5
           }
       }
   })

   // ------------

   $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       if (scroll >= 10) {
           $("#nav").addClass("affixed");
       } else {
           $("#nav").removeClass("affixed");
       }
   });

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $("#filter").addClass("affix");
        } else {
            $("#filter").removeClass("affix");
        }
    });

      // -----------------

          $(document).ready(function() {
        $("#filter-small").click(function() {
            $(this).toggleClass("filtershow");
            $("body").toggleClass("overflow-none");
            $(".side-menu-fix").toggleClass("fliteropen");
        });
        $('.listing-rht-cls').click(function() {
            if ($('.side-menu-fix').hasClass('fliteropen')) {
                $('.side-menu-fix').removeClass('fliteropen');
            }
            if ($('#filter-small').hasClass('filtershow')) {
                $('#filter-small').removeClass('filtershow');
            }
            if ($('body').hasClass('overflow-none')) {
                $('body').removeClass('overflow-none');
            } else {}
        });
    });

          // ----------------
           function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var footer_top = $("#footer").offset().top;
        var div_top = $('#sticky-anchor').offset().top;
        var div_height = $(".side-menu-fix").height();

        var padding = 20; // tweak here or get from margins etc

        if (window_top + div_height > footer_top - padding)
            $('.side-menu-fix').css({ top: (window_top + div_height - footer_top + padding) * -1 })
        else if (window_top > div_top) {
            $('.side-menu-fix').addClass('stick');
            $('.side-menu-fix').css({ top: 105 })
        } else {
            $('.side-menu-fix').removeClass('stick');
        }
    }
    $(function() {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });
          // ----------------