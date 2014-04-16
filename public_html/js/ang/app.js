'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers','ui.bootstrap'
]).
        config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
                $routeProvider.when('/searchpeople', {templateUrl: 'partials/searchpeople.html'});
                $routeProvider.when('/searchcompanies', {templateUrl: 'partials/searchcompanies.html'});
                $routeProvider.otherwise({redirectTo: '/home'});
            }]);
