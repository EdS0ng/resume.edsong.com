$(function() {

  "use strict";

  angular.bootstrap($('#about'), ['proficiencies']);
  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.menu', 
    offset: 50 
  });

  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax-section").parallax({ 
    speed : 0.3 
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  $(document).ready(function(e) {
    $(".menu li a, .middle-content a, .arrow-down a, .hire a").on("click", function(e) {
      var windowWidth = $(window).width();

      if (windowWidth >= 768) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top - 50}, 800, "easeInOutQuart");  
      }
      if (windowWidth <= 767) {
        htmlBody.animate({scrollTop: $(this.hash).offset().top - 20}, 800, "easeInOutQuart");
      }
      e.preventDefault();
    });
  });

  /*===============================================
    Go back to top
  ===============================================*/
  var go_top = ".go-top";

  // hide or show button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      $(go_top).addClass("go-top-visible");
    } 
    else {
      $(go_top).removeClass("go-top-visible");
    }
  });

  // smooth scroll to top
  $(go_top).on("click", function(){
    htmlBody.animate({scrollTop : 0}, 800, "easeOutQuart");
    return false;
  });


  /*===============================================
    Toggle Menu
  ===============================================*/
  var menu = $(".menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  $(document).on("click", function() {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });

  /*===============================================
    Animate progress
  ===============================================*/
  $("#skill-box").appear(function () {
    $(".progress-bar").each(function () {
      $(this).animate ({
        width: $(this).data("percent")+"%"
      }, 0)
    })
  });
  
  /*===============================================
    Isotope
  ===============================================*/
  var $masonryGrid = $("#masonryGrid").isotope({itemSelector: '.image-box'});

  // Layout Isotope after each image loads
  $masonryGrid.imagesLoaded().progress( function() {
    $masonryGrid.isotope('layout');
  });

  // bind filter button
  var btnGroup = $("#button-group");

  btnGroup.on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');

    $masonryGrid.isotope({filter: filterValue});
  });

  // Change active class on buttons
  btnGroup.each( function( i, buttonGroup ) {
    var $buttonGroup = $(buttonGroup);

    $buttonGroup.on( 'click', 'li', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Owl Carousel
  ===============================================*/
  // Services Slider
  $("#servicesSlider").owlCarousel({
    itemsDesktop: false, // disable on Desktop
    itemsDesktopSmall: [979,3], // disable on Small Desktop
    itemsTablet: [768,3], // 3 item on Tablet
    itemsMobile: [479,1], // 1 item on Mobile
    slideSpeed: 500, // 0.5 seconds
    pagination: false,
    navigation: false,
    rewindSpeed: 700,
    autoPlay: 3000, // 3 seconds
    stopOnHover: true
  });

  // Blog Slider
  $("#blogSlider").owlCarousel({
    items: 4,
    itemsDesktop: [1199,4], // Show 3 items on Desktop
    itemsDesktopSmall: [979,3], // 2 items on Small Deskktop
    itemsTablet: [768,1], // 1 item on Tablet
    itemsMobile: [479,1], // 1 item on Mobile
    slideSpeed: 500, // 0.5 seconds
    pagination: false,
    navigation: false,
    rewindSpeed: 700
  });

  // Custom Navigation
  var owl = $("#blogSlider");
 
  owl.owlCarousel();
 
  // Events
  $("#next").on("click", function(){
    owl.trigger('owl.next');
  })
  $("#prev").on("click", function(){
    owl.trigger('owl.prev');
  })
  // end Custom Navigation

  $("#postSlider").owlCarousel({
    slideSpeed: 500, // 0.5 seconds
    pagination: false,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindSpeed: 700,
    singleItem: true
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    if (email == '') {
      $("#email").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    if (message == '') {
      $("#message").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });

});