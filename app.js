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
			// come back to this...
		});
});
