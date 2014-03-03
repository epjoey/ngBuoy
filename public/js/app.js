define([

  'angular',

  // not needed to be used, just required
  'angularRoute'

], function(ng) {

  var app = ng.module('app', [
    'ngRoute'
  ]);
    
  return app;

});