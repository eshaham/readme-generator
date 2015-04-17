'use strict';

angular.module('readme.generate').controller('GenerateCtrl', ['$http', '$modal',
    function($http, $modal) {
    	var self = this;

    	this.data = {
    		npmPackages: []
    	};

    	this.loadNpmPackages = function(query) {
			return $http.get('assets/npm.json').then(function(result) {
				var filtered = [];
				angular.forEach(result.data, function(pkg) {
					if(pkg.name.indexOf(query) >= 0) {
						filtered.push(pkg);
					};
				});
			    return filtered;
			});
		};

    	this.generate = function() {
    		var modalInstance = $modal.open({
				templateUrl: '/modules/generate/views/generate-result.client.view.html',
				controller: 'GenerateResultCtrl as vm',
				size: 'lg',
				resolve: {
					data: function () {
					  return self.data;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				// $scope.selected = selectedItem;
			});
    	};
    }
]);