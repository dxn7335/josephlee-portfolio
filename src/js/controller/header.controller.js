//Header Navigation Controller /////////////////////////////////////////////////////////////////////////////
angular.module('header.controller', [])

    .controller('headerController', [
        '$scope', '$sce', '$stateParams', '$timeout', '$location',
        function ($scope, $sce, $stateParams, $timeout, $location){
					
					$timeout( function(){
						// Header Scroll Listener
						var distance = $("#home-nav").height() + 60;
						$(window).scroll(function(){
								if( $(window).scrollTop() >= distance ){
									$('#scroll-nav').addClass('show');
								} else{
									$('#scroll-nav').removeClass('show');
								}
						})
						
						$("#home-nav .nav-links a").removeClass("active");
						// mark current page on nav-links
						if( $location.$$path.indexOf("about") != -1){
							$("#home-nav .nav-links a[data-target='about']").addClass("active");
						} else{
							$("#home-nav .nav-links a[data-target='home']").addClass("active");
						}
					}, 0);
					
					$(".mobilemenu-btn").on("click", function(e){
						e.preventDefault();
						var toggle = $('.mobilemenu-btn').data('toggle')||0
						switch(toggle){
							case 0:
								$(".mobilemenu-btn").addClass("click");
								$("body").addClass("mobile-open");
								$("#mobile-nav").fadeIn(300);
								break;
							case 1:
								$(".mobilemenu-btn").removeClass("click");
								$("body").removeClass("mobile-open");
								$("#mobile-nav").fadeOut(300);
								break;
						}
						toggle ++;
						if(toggle > 1) toggle = 0;
						console.log(toggle);
						$('.mobilemenu-btn').data('toggle', toggle);
					});

					//close mobile nav when a link is clicked
					$('#mobile-nav .nav-links a, a.logo').on('click', function(){
						$('.mobilemenu-btn').data('toggle',0);
						$('.mobilemenu-btn').removeClass('click');
						$("body").removeClass("mobile-open");
						$("#mobile-nav").fadeOut(300);
					});
			}])

		.run( function(){
		});