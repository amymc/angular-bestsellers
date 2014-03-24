'use strict';

/* Controllers */

var bestsellersControllers = angular.module('bestsellersControllers', []);

bestsellersControllers.controller('BestsellersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('bestsellers/bestsellers.json').success(function(data) {
      $scope.bestsellers = data;
        });

     /*   $scope.mySplit = function(string, i) {
    $scope.array = string.split(' ');
    return $scope.result = $scope.array[i];
}*/
    }]);
        

/*phonecatControllers.controller('PhoneListCtrl', function($scope,  $http) {
    $http.jsonp('https://api.usatoday.com/open/bestsellers/books/ThisWeek?api_key=nefsdwpezwpea5hd5qwkx2tc&encoding=json').
        success(function(data) {
        console.log(data);
            $scope.api_bestsellers = data;
        });
});*/
  

/* $scope.query = function (bestseller){
    if (bestseller.book_details[0].title.indexOf($scope.query)!=-1 || bestseller.book_details[0].author.indexOf($scope.query)!=-1) {
            return true;
        }
        return false;
  };
  */
        
bestsellersControllers.controller('BestsellerDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.list_image = $routeParams.list_image;
  }]);
        
