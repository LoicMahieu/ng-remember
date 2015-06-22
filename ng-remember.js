
var mod = angular.module('ngRemember', [])
  .directive('inputRemember', [function () {
    return {
      restrict: 'AC',
      scope: {
        'value': '=ngModel'
      },
      link: function (scope, element, attrs) {
        var isSupported = window.localStorage;
        var key = attrs.inputRemember;
        if (!isSupported || !key) {
          return;
        }

        if (!scope.value) {
          scope.value = localStorage.getItem(key) || '';
        }

        scope.$watch('value', function (newValue) {
          localStorage.setItem(key, newValue);
        });
      }
    };
  }]);

module.exports = mod.name
