(function () {
'use strict';

angular.module('App', [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.currentFilter = null;

        $scope.$on('change:filter', function (evt, filter) {
            $scope.currentFilter = filter;
        });
    }]);

}());
