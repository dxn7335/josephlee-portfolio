//Home Controller /////////////////////////////////////////////////////////////////////////////
angular.module('home.controller', ['data.service'])

    .controller('homeController', [
        '$scope', '$sce', '$stateParams', 'dataService',
        function ($scope, $sce, $stateParams, dataService){
        	$('body').addClass("home");
					$("html, body").animate({ scrollTop: 0 }, "fast");
					$scope.works = [];
					
					//Make sure works list has been loaded
					dataService.getPromise().then(function(data){
						//when data is loaded
						$scope.works = data.works;
						
					}, function(err){
						console.log(err);
					});
					
		
    }])

		.directive('workItemRepeat', function() {
			return function(scope, element, attrs) {
				if (scope.$last){
					scope.$emit('LastElem');
				}
			};
		})
		
		.directive('workItemContainer', function() {
			return function(scope, element, attrs) {
				scope.$on('LastElem', function(event){
					setTimeout( function(){
						$(".workitem").each( function(i){
							var _this = this;
							setTimeout( function(){
								$(_this).addClass('active');
							}, 210*i);
						});
					}, 250);
				});
			};
		});