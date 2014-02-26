/**
 * This file is not necessary.  It's just here to prove
 * that you can load a controller via require.js
 */

define(function () {
  /**
   * This is using an array for angular dependency injection
   * syntax.  You could use for example:
   * `["$scope", function ($scope)` to include the scope
   * Any service can be included in this way.  The array syntax
   * is preferred for minifcation
   */
  return ["$scope", function($scope) {
    console.log('home!');
    $scope.hello = 'hi';
  }];
});