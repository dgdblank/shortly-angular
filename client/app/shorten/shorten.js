angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.display = null;

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function (link) {
        $scope.display = link;
        $scope.link.url = '';
      })
       .catch(function (error) {
        console.error(error);
      });
  };
});
