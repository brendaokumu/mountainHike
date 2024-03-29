$(function () {     //jquery DOM function
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
   $('body').scrollspy({
       target: '.navbar',
       offset: 160
   });

   // smooth scrolling
   $('nav a, .down-button a').bind('click', function () {
       $('html, body').stop().animate({
           scrollTop: $($(this).attr('href')).offset().top - 100
       }, 1500, 'easeInOutExpo');
       event.preventDefault();
   });

   // parallax scrolling with stellar.js
   $(window).stellar(); //select our window then select our stellar function

   // initialize WOW for element animation
    new WOW().init();

    // initialize NanoGallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });
});
