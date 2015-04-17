'use strict';

angular.module('readme.generate').controller('PrerequisitesCtrl', ['$http', 
    function($http) {
    	var vm = this;

    	this.loadNpmPackages = function(query) {
			return $http.get('assets/npm.json').then(function(result) {
				var filtered = [];
				angular.forEach(result.data, function(pkg) {
					if(pkg.name.indexOf(query) >= 0) {
						filtered.push(pkg);
					}
				});
			    return filtered;
			});
		};
    }
]);