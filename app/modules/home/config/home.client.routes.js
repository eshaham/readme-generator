'use strict';

// Setting up route
angular.module('myApp.home').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: 'modules/home/views/home.client.view.html',
                controller: 'HomeCtrl',
                data : { pageTitle: 'Home' }
            }).
            state('about', {
                url: '/about',
                templateUrl: 'modules/home/views/about.client.view.html',
                controller: 'AboutCtrl',
                data : { pageTitle: 'About' }
            });
    }
]);