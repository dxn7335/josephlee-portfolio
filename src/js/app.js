'use strict';

// Main Router /////////////////////////////////////////////////////////////////////////////
var app = angular.module('App', 
		['ui.router', 
		 'home.controller', 
		 'work.controller',
		])
		.config(function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
			'use strict';
			// configure urls
			$urlRouterProvider.when('/work', '/');
			$urlRouterProvider.otherwise('/');
			
			// Check browser if history API is available
			// if so, route without #
			if( Modernizr.history ){
				$locationProvider.html5Mode(true);
			}
			
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