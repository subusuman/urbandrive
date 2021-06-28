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

   $('#banner').owlCarousel({
       loop: true,
       margin: 0,
       nav: true,
       smartSpeed: 1450,
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
   $('#reviews, #banner-small-screen').owlCarousel({
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
       dots: true,
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
       dots: true,
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


   // ------------



   $(".timepick").datetimepicker({
       pickDate: false,
       minuteStep: 5,
       pickerPosition: 'bottom-right',
       format: 'HH:ii p',
       autoclose: true,
       showMeridian: true,
       startView: 1,
       maxView: 1,
   });
   $(".datetimepicker").find('thead th').remove();
   $(".datetimepicker").find('thead').append($('<th class="switch">').text('Pick Time'));
   $('.switch').css('width', '190px');


   $(".form_datetime").datepicker({
       autoclose: true,
      todayHighlight: true,
      startDate: new Date()
   })
   //.datepicker('update', new Date());

   // ----------------

   // ----------------