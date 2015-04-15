'use strict';

angular.module('readme.generate').controller('GenerateCtrl', ['$modal',
    function($modal) {
    	var self = this;

    	this.data = {};

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