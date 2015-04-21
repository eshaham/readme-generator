'use strict';

angular.module('readme.core').directive('prerequisites', [
    function() {
        return({
            controller: 'PrerequisitesCtrl as vm',
            bindToController: true,
            templateUrl: '/modules/generate/views/prerequisites.client.view.html',
            scope: {
                npmPackages: '='
            }
        });
    }
]);