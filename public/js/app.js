define([

  'angular',
  'controller/HomeCtrl',
  'controller/HelloCtrl',

  // not needed to be used, just required
  'angularRoute'

], function (

  ng,
  HomeCtrl,
  HelloCtrl

){

  var app = ng.module('app', [
    'ngRoute'
  ]);
    
  app.controller('HomeCtrl', HomeCtrl);
  app.controller('HelloCtrl', HelloCtrl);
  return app;

});