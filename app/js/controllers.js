'use strict';

/* Controllers */

var bestsellersControllers = angular.module('bestsellersControllers', []);

bestsellersControllers.controller('BestsellersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('bestsellers/bestsellers.json').success(function(data) {
      $scope.bestsellers = data;
        });
       //  $scope.query = '';
        
        
       /* $scope.custom_filter = function(bestsellers,query) {
  var filteredBestsellers = [];
  var queryRegExp = RegExp(query, 'i'); //'i' -> case insensitive
  angular.forEach(bestsellers, function(bestseller) {
    if (bestseller.book_details[0].title.match(queryRegExp) || bestseller.book_details[0].author.match(queryRegExp)) {
      filteredBestsellers.push(bestseller);
    }
  });
  return filteredBestsellers;
};*/
        
 /*$scope.custom_filter = function(bestsellers) {
        var filteredBestsellers = [];
        angular.forEach(bestseller, function(bestseller) {
        if (bestsellers.book_details[0].title.indexOf($scope.query)!=-1 || bestsellers.book_details[0].author.indexOf($scope.query)!=-1) 
        {
            filteredBestsellers.push(bestseller);
        }
       return filteredBestsellers;
    });
    }
    (/
/*	 $scope.query = function (bestseller){
    if (bestseller.book_details[0].title.indexOf($scope.query)!=-1 || bestseller.book_details[0].author.indexOf($scope.query)!=-1) {
            return true;
        }
        return false;
  };
  */
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
  
  
 /* $scope.searchFilter = function (bestseller) {
        var re = new RegExp($scope.query, 'i');
        return !$scope.query || re.test(bestseller.book_details[0].title) || re.test(bestseller.book_details[0].author);
    };
*/


        
bestsellersControllers.controller('BestsellerDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.list_image = $routeParams.list_image;
  }]);
  
  
        
