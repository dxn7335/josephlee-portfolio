//Work Navigation Controller /////////////////////////////////////////////////////////////////////////////
// Used to navigate between project pages
angular.module('worknav.controller', ['data.service'])

    .controller('workNavController', [
        '$scope', '$sce', '$stateParams', 'dataService',
        function ($scope, $sce, $stateParams, dataService){
        	$scope.works = [];
					$scope.prev = {};
					$scope.next = {};
					
					//Make sure works list has been loaded
					dataService.getPromise().then(function(data){
						//when data is loaded
						console.log($stateParams);
						$scope.works = data.works;
						for(var i=0; i<$scope.works.length; i++){
							// Find current index in works array
							// create links for viewing previous or next proj
							// (if no prev or no next proj), don't show link
							if( $stateParams.id == $scope.works[i].id ){
								if( $scope.works[i-1] ){ $scope.prev = {id:$scope.works[i-1].id}; }
								else{ $scope.prev = {invalid:"invalid"}; }
								if( $scope.works[i+1] ){ $scope.next = {id:$scope.works[i+1].id}; }
								else{ $scope.next = {invalid:"invalid"}; }
							}
						}
					}, function(err){
						console.log(err);
					});
    }]);