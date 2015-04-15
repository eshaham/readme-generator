'use strict';

// Setting up route
angular.module('readme.generate').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.
            state('generate', {
                url: '/generate',
                templateUrl: 'modules/generate/views/generate.client.view.html',
                controller: 'GenerateCtrl',
                data : { pageTitle: 'Generate Readme' }
            });
    }
]);