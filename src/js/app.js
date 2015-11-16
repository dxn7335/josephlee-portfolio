'use strict';

// Main Router /////////////////////////////////////////////////////////////////////////////
var app = angular.module('App', 
		['ui.router', 
		 'home.controller', 
		 'work.controller',
		])
		.config(function ( $stateProvider, $urlRouterProvider ) {
			'use strict';
			// configure urls
			$urlRouterProvider.when('/work', '/');
			$urlRouterProvider.otherwise('/');

			//state
			$stateProvider
				.state('work', {
					url: '/work/:id',
					views:{
							'work-sect':{
									'templateUrl': function($stateParams){
										console.log($stateParams.id);
										return 'assets/templates/'+$stateParams.id+".html";
									},
									'controller': 'workController', // map js to html scope
							},
					}
				})
				.state('home',{
					url: "/",
					views:{
							'home':{
									templateUrl: 'assets/templates/home.html',
									controller: 'homeController', // map js to html scope
							}
					}
				});
		});