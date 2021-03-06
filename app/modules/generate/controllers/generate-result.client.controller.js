'use strict';

angular.module('readme.generate').controller('GenerateResultCtrl', ['$modalInstance', 'Generator', 'data',
    function($modalInstance, Generator, data) {
    	var vm = this;
    	
    	this.data = data;
    	this.generatedReadme = Generator.generate(data);

    	this.close = function () {
			$modalInstance.close();
		};
    }
]);