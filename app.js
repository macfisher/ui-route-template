// app.js

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		// home state and nested views
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})
		
		// nested list with custom controller
		.state('home.list', {
			url: '/list',
			templateUrl: 'partial-home-list.html',
			controller: function($scope) {
				$scope.robots = ['augmentor', 'security', 'repair'];
			}
		})
		
		// nested list with random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'Robots... everywhere...'
		})
		
		// about page and multiple named views
		.state('about', {
			url: '/about',
			views: {
				// main template (relatively named)
				'': { templateUrl: 'partial-about.html' },
				
				// child views defined here (absolutely named)
				'columnOne@about': { template: 'This is column one' },
				
				// column two gets a separate controller
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'colTwoController'
				}
			}
		});
}); // closes $routerApp.config()

routerApp.controller('colTwoController', function($scope) {
	
	$scope.message = 'test';
	
	$scope.robots = [
		{
			name: 'Augmentor',
			energy: 3,
			attack: 1,
			hp: 3
		},
		{
			name: 'Security',
			energy: 3,
			attack: 3,
			hp: 2
		},
		{
			name: 'Repair',
			energy: 2,
			attack: 1,
			hp: 4
		}
	];
});
