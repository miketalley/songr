var SongsApp = angular.module('SongsApp', ['ngRoute']);

SongsApp.config(['$routeProvider', function($routeProvider){

  // Route for '/product'
  $routeProvider.when('/song/:songID', {
    templateUrl: '../assets/mainSong.html',
    controller: 'SongsController'
  });

  // Default route
  $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',
    controller: 'IndexController'
  });

}]);
