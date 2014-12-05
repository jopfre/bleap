angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('BeaconsCtrl', function($scope, Beacons) {
  $scope.beacons = Beacons.all();
})

.controller('BeaconDetailCtrl', function($scope, $stateParams, Beacons) {
  $scope.beacon = Beacons.get($stateParams.beaconIdentifier);
});
