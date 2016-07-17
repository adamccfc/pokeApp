'use strict';

/**
 * @ngdoc function
 * @name pokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokeApp
 */
angular.module('pokeApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "1";

    function fetch() {
      $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.search)
        .then(function(response) {
          $scope.pokemon = response.data;
          console.log($scope.pokemon);
        });
    }
  });