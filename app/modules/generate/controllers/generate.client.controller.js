'use strict';

angular.module('readme.generate').controller('GenerateCtrl', ['$modal',
    function($modal) {
    	var vm = this;

    	this.data = {
    		npmPackages: []
    	};

    	this.sections = [];

		this.addSection = function(sectionType) {
			if(sectionType === 'prerequisites') {
				var section = {
					displayName: 'Prerequisites',
					sectionType: 'prerequisites'
				};
				vm.sections.push(section);
			}
		};

    	this.generate = function() {
    		var modalInstance = $modal.open({
				templateUrl: '/modules/generate/views/generate-result.client.view.html',
				controller: 'GenerateResultCtrl as vm',
				size: 'lg',
				resolve: {
					data: function () {
					  return vm.data;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				// $scope.selected = selectedItem;
			});
    	};
    }
]);