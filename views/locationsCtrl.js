angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainService) {
  console.log('locations');
  $scope.locations = mainService.travelInfo;
})
