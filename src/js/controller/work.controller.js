//Work Controller /////////////////////////////////////////////////////////////////////////////
angular.module('work.controller', [])

	.controller('workController', [
			'$scope', '$sce', '$stateParams', '$timeout',
			function ($scope, $sce, $stateParams, $timeout){
				
			}
	])

	.run(function($rootScope){
		$rootScope.$on('$stateChangeSuccess', function() {
			$("html, body").animate({ scrollTop: 0 }, "fast");
		});	
	})

	.directive('workPage', [ '$timeout', function ($timeout) {
		return {
			link: function(scope, elem){
				$('body').removeClass('home');
				$("html, body").animate({ scrollTop: 0 }, "fast");
				$timeout( function(){

					//init image slider
					$(elem).find('.img-slider').slick({
						dots: true,
						infinite: true,
						arrows: false,
						speed: 400,
						slidesToShow: 1
					});

					$(elem).find('.slick-slider').css("height", "auto");

				}, 0);
			}
		};
	}]);