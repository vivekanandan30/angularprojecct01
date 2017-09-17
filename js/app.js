var myApp = angular.module('myApp', [
	'ngRoute',
	'artistControllers'
	]);

myApp.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider){
	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'RegistrationController'
	}).
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'detailsController'
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);