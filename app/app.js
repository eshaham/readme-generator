'use strict';

angular.module('readme', ['readme.core', 'readme.home']);

// Setting HTML5 Location Mode
angular.module('readme').config(['$locationProvider', 
    function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
]);