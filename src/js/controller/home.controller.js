//Home Controller /////////////////////////////////////////////////////////////////////////////
angular.module('home.controller', ['data.service'])

    .controller('homeController', [
        '$scope', '$sce', '$stateParams', 'dataService',
        function ($scope, $sce, $stateParams, dataService){
        	$scope.works = [];
					
					//Make sure works list has been loaded
					dataService.getPromise().then(function(data){
						//when data is loaded
						$scope.works = data.works;
						console.log($scope.works);
					}, function(err){
						console.log(err);
					});
					
    }]);