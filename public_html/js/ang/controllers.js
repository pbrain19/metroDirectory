'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
        controller('individuals', function($scope, $http) {
            $http.get('js/data.json').success(function(data) {
                $scope.individuals = data.individuals;
                $scope.companies = data.companies;
            })

        });