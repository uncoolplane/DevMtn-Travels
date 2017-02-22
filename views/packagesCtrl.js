angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainService) {
  console.log('packages');

  $scope.locations = mainService.travelInfo;
})
