'use strict';

/* App Module */

var bestsellersApp = angular.module('bestsellersApp', [
  'ngRoute',
  'bestsellersControllers',
]);

/*bestsellersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);*/
  
bestsellersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bestsellers', {
        templateUrl: 'partials/bestseller-list.html',
        controller: 'BestsellersCtrl'
      }).
       when('/bestsellers/:list_image', {
        templateUrl: 'partials/bestseller-detail.html',
        controller: 'BestsellerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/bestsellers'
      });
  }]);

