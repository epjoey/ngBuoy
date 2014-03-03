define(['app', 'socketio'], function(app, io) {
  app.controller('HomeCtrl', ["$scope", function($scope) {
    var socket = io.connect('192.168.2.2:7076');
    socket.emit('ready');
    socket.on('buoy', function(buoy) {
      $scope.data = buoy.data;
      console.log($scope);
    })
  }]);
});