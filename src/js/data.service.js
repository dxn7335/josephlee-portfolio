// Main Service for Work Data //////////////////////////////////
// Pulls in list of work
angular.module('data.service', [])
		.service('dataService', [ '$q','$http', function($q, $http){
			this.promise = null;
	
			function makeRequest() {
					 return $http.get('assets/data/workConfig.json')
							 .then(function(resp){
										return resp.data;
							 });
			}
		
			//will only get data if no call has been made already
			this.getPromise = function(update){
				if (update || !this.promise) {
					 this.promise = makeRequest();
				}
				return this.promise;      
			}
		}]);
