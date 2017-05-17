$(function() {

   // CHANGE NAV COLOURS
   $(window).scroll(function() {
	   if ($(this).scrollTop() >= 200) {
	      $('nav, nav h2, nav a, nav .input, .nav-form button').addClass('change-nav');
	   }
	   else {
	      $('nav, nav h2, nav a, nav .input, .nav-form button').removeClass('change-nav');
	   }
	});

   // SMOOTH SCROLL
   var headerHeight = $('nav, .open-phone-nav').outerHeight();

	$('.smooth-scroll').click(function(e) {

		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 700);

		e.preventDefault();
	})

   // SHOW MEMEBER LOGIN
   $('.showForm, .closeForm').click(function() {
      $('.memberLogin').toggleClass('toggle');
   });

   // RANDOM BACKGROUND ON LOAD
   var images = ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpg']
   $('.banner').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});

   // SHOW PERSONAL INFORMATION ON HOVER
   $('.team-1').mouseover(function() {
      $('.team-1-info').addClass('hover');
   });
   $('.team-1').mouseout(function() {
      $('.team-1-info').removeClass('hover');
   });

   $('.team-2').mouseover(function() {
      $('.team-2-info').addClass('hover');
   });
   $('.team-2').mouseout(function() {
      $('.team-2-info').removeClass('hover');
   });

   $('.team-3').mouseover(function() {
      $('.team-3-info').addClass('hover');
   });
   $('.team-3').mouseout(function() {
      $('.team-3-info').removeClass('hover');
   });

   $('.team-4').mouseover(function() {
      $('.team-4-info').addClass('hover');
   });
   $('.team-4').mouseout(function() {
      $('.team-4-info').removeClass('hover');
   });

   // PHONE NAV
   $('.open-phone-nav').click(function() {
      $('.phone-nav').toggleClass('toggle');
   });

   // CHECK BROWSER
   if (navigator.userAgent.search("Trident") >= 0) {
      $('.useOther').addClass('show');
   }
   else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      $('.useOther').addClass('show');
   }
   else if (navigator.userAgent.search("Opera") >= 0) {
      $('.useOther').addClass('show');
   }
   else if (navigator.userAgent.search("Edge") >= 0) {
      $('.useOther').addClass('show');
   }
   $('.close-useOther').click(function() {
      $('.useOther').addClass('hidden');
   });

});
