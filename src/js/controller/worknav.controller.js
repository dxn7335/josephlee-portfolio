//Work Navigation Controller /////////////////////////////////////////////////////////////////////////////
// Used to navigate between project pages
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
					
					// Find current index in works array
					
					// create links for viewing previous or next proj
					// (if no prev or no next proj), don't show link
					$scope.prev = {};
					$scope.next = {};
    }]);