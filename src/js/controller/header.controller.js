//Header Navigation Controller /////////////////////////////////////////////////////////////////////////////
angular.module('header.controller', [])

    .controller('headerController', [
        '$scope', '$sce', '$stateParams', '$timeout',
        function ($scope, $sce, $stateParams, $timeout){
					
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
						console.log(window.location.pathname);
						// mark current page on nav-links
						if( window.location.pathname.indexOf("about") != -1){
							$("#home-nav .nav-links a[data-target='about']").addClass("active");
						} else{
							$("#home-nav .nav-links a[data-target='home']").addClass("active");
						}
					}, 0);
    }])

		.run( function(){
		});