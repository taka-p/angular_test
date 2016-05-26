(function () {
'use strict';

angular.module('App', [])
    .controller('RegisterController', ['$scope', 'todos', function ($scope, todos) {
        $scope.newTitle = '';

        $scope.addTodo = function () {
            todos.add($scope.newTitle);
            $scope.newTitle = '';
        };
    }]);

}());
