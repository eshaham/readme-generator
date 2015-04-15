'use strict';

angular.module('readme', ['readme.core', 'readme.home', 'readme.generate']);

// Setting HTML5 Location Mode
angular.module('readme').config(['$locationProvider', 
    function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
]);