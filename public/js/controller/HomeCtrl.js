define(['app', 'socketio', 'dateRangePicker'], function(app, io) {
  //console.log(jquery.daterangepicker);
  app.controller('HomeCtrl', ["$scope", function($scope) {
    //$('#datepicker').daterangepicker();
    $(document).ready(function() {
      $('#datepicker').daterangepicker();
    });
    var socket = io.connect('192.168.2.2:7076');
    socket.emit('ready');
    socket.on('buoy', function(buoy) {
      $scope.data = buoy.data;
    })
  }]);
});