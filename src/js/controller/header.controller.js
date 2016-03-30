//Header Navigation Controller /////////////////////////////////////////////////////////////////////////////
angular.module('header.controller', [])

    .controller('headerController', [
        '$scope', '$sce', '$stateParams', '$timeout', '$location',
        function ($scope, $sce, $stateParams, $timeout, $location){
			
	}])

	.run( function(){
	})

	.directive("mainNav", ['$timeout','$location', function ($timeout, $location) {
		return {
			link: function (scope, elem, attr){
				var el = $(elem);

				$timeout( function(){
					// Header Scroll Listener
					var distance = el.height() + 60;
					$(window).scroll(function(){
							if( $(window).scrollTop() >= distance ){
								$('#scroll-nav').addClass('show');
							} else{
								$('#scroll-nav').removeClass('show');
							}
					})
					
					el.find(".nav-links a").removeClass("active");
					// mark current page on nav-links
					if( $location.$$path.indexOf("about") != -1){
						el.find(".nav-links a[data-target='about']").addClass("active");
					} else{
						el.find("#home-nav .nav-links a[data-target='home']").addClass("active");
					}
				}, 0);
			}
		};
	}])

	.directive("mobileMenuInteraction", ['$timeout', function ($timeout) {
		return {
			link: function (scope, elem, attr) {

				$timeout( function(){

					$(elem).find(".mobilemenu-btn").on("click", function(e){
						e.preventDefault();

						// use toggle attr to keep track of open status of mobile menu
						var toggle = $(elem).data('toggle')||0,
							mobileBtn = $(elem).find(".mobilemenu-btn");

						switch(toggle){
							case 0:
								$(mobileBtn).addClass("click");
								$("body").addClass("mobile-open");
								console.log($(elem).closest('nav').find("#mobile-nav"));
								$(elem).closest('header').find("#mobile-nav").fadeIn(300);
								$(elem).closest('nav').addClass('mobile-menu-open');
								break;
							case 1:
								$(mobileBtn).removeClass("click");
								$("body").removeClass("mobile-open");
								$(elem).closest('header').find("#mobile-nav").fadeOut(300);
								$(elem).closest('nav').removeClass('mobile-menu-open');
								break;
						}
						toggle ++;
						if(toggle > 1) toggle = 0;
						console.log(toggle);
						$(elem).data('toggle', toggle);
					});

				}, 0);
			}
		};
	}])

	.directive("mobileNav", ['$timeout', function ($timeout) {
		return {
			link: function (elem){
				//close mobile nav when a link is clicked
				$('#mobile-nav .nav-links a').on('click', function(){
					$('.mobilemenu-btn').data('toggle',0);
					$('.mobilemenu-btn').removeClass('click');
					$("body").removeClass("mobile-open");
					$("#mobile-nav").fadeOut(300);
				});
			}
		};
	}]);

