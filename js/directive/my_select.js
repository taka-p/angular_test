(function () {
'use strict';

angular.module('App', [])
    .directive('mySelect', [function () {
        return function (scope, $el, attrs) {
            scope.$watch(attrs.mySelect, function (val) {
                if (val) {
                    $el[0].select();
                }
            });
        };
    }]);

}());
