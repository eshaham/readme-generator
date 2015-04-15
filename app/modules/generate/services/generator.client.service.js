'use strict';

angular.module('readme.generate').factory('Generator', [
	function() {
		function generate(data) {
			var readme = '';

    		if(data.projectName) {
    			readme += '# ' + data.projectName + '\n';
    		}

    		if(data.projectDescription) {
    			readme += data.projectDescription + '\n\n';
    		}

    		return readme;
		}

		return {
			generate: generate
		};
	}
]);