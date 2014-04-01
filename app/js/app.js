'use strict';

/* App Module */

var bestsellersApp = angular.module('bestsellersApp', [
  'ngRoute',
  'bestsellersControllers',
]);
  
bestsellersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bestsellers', {
        templateUrl: 'partials/bestseller-list.html',
        controller: 'BestsellersCtrl'
      }).
       when('/bestsellers/bestsellers/:list_image', {
        templateUrl: 'partials/bestseller-detail.html',
        controller: 'BestsellerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/bestsellers'
      });
  }]);

