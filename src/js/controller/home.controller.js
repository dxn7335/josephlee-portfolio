//Home Controller /////////////////////////////////////////////////////////////////////////////
angular.module('home.controller', ['data.service'])

    .controller('homeController', [
        '$scope', '$sce', '$stateParams', 'dataService',
        function ($scope, $sce, $stateParams, dataService){
        
					dataService.getPromise().then(function(data){
						//when data is loaded
						console.log(data);
					}, function(err){
						console.log(err);
					});
    }]);