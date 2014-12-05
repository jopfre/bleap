angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
.factory('Beacons', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var beacons = [
    { 
      uuid: 'EBEFD083-70A2-47C8-9837-E7B5634DF524',
      identifier:'jaalee',
      minor: 65,
      major: 2 
    },
    { 
      uuid: '1',
      identifier:'test',
      minor: 1,
      major: 1 
    }
  ];

  return {
    all: function() {
      return beacons;
    },
    get: function(beaconIdentifier) {
      // Simple index lookup
      return beacons[beaconIdentifier];
    }
  }
});
