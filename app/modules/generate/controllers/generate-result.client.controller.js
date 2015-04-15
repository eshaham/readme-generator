'use strict';

angular.module('readme.generate').controller('GenerateResultCtrl', ['$modalInstance', 'data',
    function($modalInstance, data) {
    	var self = this;
    	
    	this.data = data;
    	this.generatedReadme = generateReadme(data);

    	function generateReadme(data) {
    		var readme = '';

    		if(data.projectName) {
    			readme += '# ' + data.projectName + '\n';
    		}

    		if(data.projectDescription) {
    			readme += data.projectDescription + '\n\n';
    		}

    		return readme;
    	}

    	this.close = function () {
			$modalInstance.close();
		};
    }
]);