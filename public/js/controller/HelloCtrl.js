define(['app'], function (app) {
  app.controller('HelloCtrl', ["$scope", function($scope) {
    console.log('hello!');
  }]);
});