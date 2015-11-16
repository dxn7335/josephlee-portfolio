(function ($, window, document, undefined) {

  'use strict';
	var _ = require('underscore');
	var angular = require('angular');
	var uirouter = require('angular-ui-router');
	
	// Main Module /////////////////////////////////////////////////////////////////////////////
	var app = angular.module('App', 
			['ui.router', 
			 'video.controller', 
			 'info.controller',
			 'search.controller',
			])
			.config(function ( $stateProvider, $urlRouterProvider ) {
				'use strict';
				// configure urls
				$urlRouterProvider.when('/work', '/');
				$urlRouterProvider.otherwise('/');

				//state
				$stateProvider
					.state('work', {
						url: '/work',
						views:{
								'work-sect':{
										'templateUrl': 'templates/search.html',
										'controller': 'searchController', // map js to html scope
								},
						}
					})
					.state('home',{
						url: "/",
						views:{
								'home':{
										templateUrl: 'templates/home.html',
										controller: 'searchController', // map js to html scope
								}
						}
					});
			});

  
})(jQuery, window, document);
