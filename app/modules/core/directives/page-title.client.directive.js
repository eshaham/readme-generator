'use strict';

angular.module('myApp.core').directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {
        var listener = function(event, toState) {
          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'My AngularJS App';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);