//Header Navigation Controller /////////////////////////////////////////////////////////////////////////////
/* ALL WRONG */
// Any dom manipulation or listeners should be done through directives (these actions can affect the $scope of a model)
angular.module('workHeader.controller', [])

    .controller('workHeaderController', [
        '$scope', '$sce', '$stateParams', '$timeout',
        function ($scope, $sce, $stateParams, $timeout){
					
					$timeout( function(){
						// Header Scroll Listener
						var distance = 1;
						$(window).scroll(function(){
								if( $(window).scrollTop() >= distance ){
									$("#work-main-nav").addClass('scroll');
								} else{
									$("#work-main-nav").removeClass('scroll');
								}
						})
						
						$(".mobilemenu-btn").on("click", function(){
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
						$('.mobilemenu-btn').data('toggle', toggle);
					});

					//close mobile nav when a link is clicked
					$('#mobile-nav .nav-links a').on('click', function(){
						$('.mobilemenu-btn').data('toggle',0);
						$('.mobilemenu-btn').removeClass('click');
						$("body").removeClass("mobile-open");
						$("#mobile-nav").fadeOut(300);
					});
						
					}, 0);
    }])

		.run( function(){
		});