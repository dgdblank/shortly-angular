angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.whatwewant = null;

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function (link) {
        $scope.whatwewant = link;
        $scope.link.url = '';
      })
       .catch(function (error) {
        console.error(error);
      });
  };
});
