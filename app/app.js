'use strict';

angular.module('myApp', ['myApp.core', 'myApp.home']);

// Setting HTML5 Location Mode
angular.module('myApp').config(['$locationProvider', 
    function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
]);