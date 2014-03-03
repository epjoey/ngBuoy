define([

  'angular',
  'app',

  // not needed to be used, just loaded
  'controller/HomeCtrl',
  'controller/HelloCtrl'


], function (

  ng,
  app

){

  return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/hello', {
        templateUrl: '/public/templates/hello.html',
        controller: 'HelloCtrl'
      }).
      otherwise({
        templateUrl: '/public/templates/home.html',
        controller: 'HomeCtrl'
      });
    $locationProvider.html5Mode(true);
  }]);

});