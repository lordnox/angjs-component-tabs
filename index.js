
var app       = require('angjs-component-base');
var name      = 'angjs-component-tabs';
var template  = require('./template.js');

app.directive('tabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', '$element', function($scope, $element) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) $scope.select(pane);
        panes.push(pane);
      };
    }],
    template:template,
    replace: true
  };
});

module.exports      = app;
