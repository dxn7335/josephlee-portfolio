'use strict';

// Main Router /////////////////////////////////////////////////////////////////////////////
var app = angular.module('App', 
		['ui.router', 
		 'home.controller', 
		 'work.controller',
		 'header.controller',
		 'about.controller',
		 'workHeader.controller',
		 'worknav.controller'
		])
		.config(function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
			'use strict';
			// configure urls
			$urlRouterProvider.when('/work', '/about', '/');
			$urlRouterProvider.otherwise('/');
			
			//state
			$stateProvider
				.state('work', {
					url: '/work/:id',
					views:{
							'header':{
								templateUrl: 'assets/templates/global/work-header.html',
								controller: 'workHeaderController',
							},
							'work-sect':{
									'templateUrl': function($stateParams){
										console.log($stateParams.id);
										return 'assets/templates/'+$stateParams.id+".html";
									},
									'controller': 'workController', // map js to html scope
							},
							'work-nav':{
								templateUrl: 'assets/templates/global/work-navigation.html',
								controller: 'workNavController',
							},
						'footer':{
								templateUrl: 'assets/templates/global/footer.html',
							}
					}
				})
				.state('about',{
						url: "/about/",
						views:{
								'header':{
									templateUrl: 'assets/templates/global/header.html',
									controller: 'headerController', // map js to html scope
								},
								'about':{
									templateUrl: 'assets/templates/about.html',
									controller: 'aboutController', // map js to html scope
								},
							  'footer':{
								  templateUrl: 'assets/templates/global/footer.html',
							  }
						}
					})
				.state('home',{
					url: "/",
					views:{
							'header':{
								templateUrl: 'assets/templates/global/header.html',
								controller: 'headerController', // map js to html scope
							},
							'home':{
								templateUrl: 'assets/templates/home.html',
								controller: 'homeController', // map js to html scope
							},
						  'footer':{
								templateUrl: 'assets/templates/global/footer.html',
							}
					}
				});
		});