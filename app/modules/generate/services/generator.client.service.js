'use strict';

angular.module('readme.generate').factory('Generator', [
	function() {
		function formatText(str, lineBreaksBefore, addLineBreakAfter) {
			if(!lineBreaksBefore) {
				lineBreaksBefore = 1;
			}
			var lineBreaksBeforeStr = '';

			for(var i = 0 ; i < lineBreaksBefore ; i++) {
				lineBreaksBeforeStr += '\n';
			}

			var lineBreaksAfterStr = '';
			if(addLineBreakAfter) {
				lineBreaksAfterStr = '\n';
			}

			return lineBreaksBeforeStr + str + lineBreaksAfterStr;
		}

		function formatHeader(str, level) {
			var headerStr = '';
			if(level === 1) {
				headerStr += '# ';
			}
			if(level === 2) {
				headerStr += '## ';
			}

			return formatText(headerStr + str, 2);
		}

		function formatBullet(str) {
			return formatText('* ' + str);
		}

		function formatCode(str, language) {
			if(!language) {
				language = '';
			}
			var codeStartStr = formatText('```' + language, 2);
			var codeStr = formatText(str);
			var codeEndStr = formatText('```', 1, true);
			return codeStartStr + codeStr + codeEndStr;
		}

		function generate(data) {
			var readme = '';

    		if(data.projectName) {
    			readme += formatHeader(data.projectName, 1);
    		}

    		if(data.projectDescription) {
    			readme += formatText(data.projectDescription);
    		}

    		if(data.npmPackages && data.npmPackages.length) {
    			readme += formatHeader('Prerequisites', 2);
    			readme += formatText('Make sure you have installed all of the following prerequisites on your development machine:');
    			angular.forEach(data.npmPackages, function(pkg) {
    				readme += formatBullet(pkg.name);
    				readme += formatCode('$ npm install ' + pkg.name, 'bash');
    			});
    		}

    		while(readme.startsWith('\n')) {
    			readme = readme.substring(1);
    		};

    		return readme;
		}

		return {
			generate: generate
		};
	}
]);