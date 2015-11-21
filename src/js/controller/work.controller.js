//Work Controller /////////////////////////////////////////////////////////////////////////////
angular.module('work.controller', [])

	.controller('workController', [
			'$scope', '$sce', '$stateParams', '$timeout',
			function ($scope, $sce, $stateParams, $timeout){
				$('body').removeClass('home');
				$("html, body").animate({ scrollTop: 0 }, "fast");
				$timeout( function(){

					//init image slider
					$('.img-slider').slick({
						dots: true,
						infinite: true,
						arrows: true,
						speed: 400,
						slidesToShow: 1
					});

					$('.slick-slider').css("height", "auto");

				}, 0);
			}
	])

	.run(function($rootScope){
		$rootScope.$on('$stateChangeSuccess', function() {
			$("html, body").animate({ scrollTop: 0 }, "fast");
		});	
	});