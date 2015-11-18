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
							arrows: false,
							speed: 400,
							slidesToShow: 1,
							accessibility: false
						});
						
						$('.slick-slider').css("height", "auto");
						
					}, 0);
    		}
		]);