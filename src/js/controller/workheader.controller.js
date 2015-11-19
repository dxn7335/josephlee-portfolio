//Header Navigation Controller /////////////////////////////////////////////////////////////////////////////
angular.module('workHeader.controller', [])

    .controller('workHeaderController', [
        '$scope', '$sce', '$stateParams', '$timeout',
        function ($scope, $sce, $stateParams, $timeout){
					
					$timeout( function(){
						// Header Scroll Listener
						var distance = $("#work-main-nav").height() / 2;
						$(window).scroll(function(){
								if( $(window).scrollTop() >= distance ){
									$("#work-main-nav").addClass('scroll');
								} else{
									$("#work-main-nav").removeClass('scroll');
								}
						})
					}, 0);
    }])

		.run( function(){
		});