// About Controller /////////////////////////////////////////////////////////////////////////////
angular.module('about.controller', [])

    .controller('aboutController', [
        '$scope', '$sce', '$stateParams', '$timeout',
        function ($scope, $sce, $stateParams, $timeout){
					$('body').addClass("home");
					
					$timeout( function(){
					
					}, 0);
    }])