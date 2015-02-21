var VAbusinessApp = angular.module('VAbusinessApp', [])

VAbusinessApp.controller('messageController', ['$scope', function($scope) {
    $scope.keycounter = 0;
    $scope.change = function() {
        $scope.counter++;
    }
}]);