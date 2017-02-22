angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainService) {
  console.log('booked');

  function getTrip(id) {
    for(var i = 0; i < mainService.travelInfo.length; i++) {
      var location = mainService.travelInfo[i];
      if (location.id == id) {
        $scope.location = location;
      }
    }
  }

  $scope.tripId = $stateParams.id;
  getTrip($scope.tripId);
})
