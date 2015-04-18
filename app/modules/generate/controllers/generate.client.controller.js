'use strict';

angular.module('readme.generate').controller('GenerateCtrl', ['$modal',
    function($modal) {
    	var vm = this;

    	this.data = {
    		npmPackages: []
    	};

        this.possibleSections = [
            {
                sectionType: 'prerequisites',
                displayName: 'Prerequisites',
                multiple: false,
                inUse: false
            }
        ];
    	this.sections = [];

		this.addSection = function(sectionMetadata) {
            sectionMetadata.inUse = true;
            var section = {
                sectionType: sectionMetadata.sectionType,
                displayName: sectionMetadata.displayName,
                metadata: sectionMetadata
            };

			vm.sections.push(section);
		};

        this.removeSection = function(section) {
            section.metadata.inUse = false;
            var index = vm.sections.indexOf(section);
            if (index >= 0) {
                vm.sections.splice(index, 1);
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