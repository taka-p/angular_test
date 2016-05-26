(function () {
'use strict';

angular.module('App', [])
    .service('todos', ['$rootScope', '$filter', function ($scope, $filter) {
        var list = [];

        $scope.$watch(function () {
            return list;
        }, function (value) {
            $scope.$broadcast('change:list', value);
        }, true);

        var where = $filter('filter');

        var done = { done: true };
        var remaining = { done: false };

        this.filter = {
            done: done,
            remaining: remaining
        };

        this.getDone = function () {
            return where(list, done);
        };

        this.add = function (title) {
            list.push({
                title: title,
                done: false
            });
        };

        this.remove = function (currentTodo) {
            list = where(list, function (todo) {
                return currentTodo !== todo;
            });
        };

        this.removeDone = function () {
            list = where(list, remaining);
        };

        this.changeState = function (state) {
            angular.forEach(list, function (todo) {
                todo.done = state;
            });
        };
    }]);
    
}());
