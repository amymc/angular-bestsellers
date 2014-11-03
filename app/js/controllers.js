'use strict';

/* Controllers */

var bestsellersControllers = angular.module('bestsellersControllers', []);

bestsellersControllers.controller('BestsellersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('bestsellers/bestsellers.json').success(function(data) {
      $scope.bestsellers = data;
        });

bestsellersControllers.controller('BestsellerDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.list_image = $routeParams.list_image;
  }]);
