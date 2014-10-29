'use strict';

angular.module('sampleApp').controller('greetingsController', ['$scope', '$http', function ($scope, $http){
	$scope.person = "stranger";

	$scope.greetings = function () {
		
			$http.get('/api/greetings')
			.success(function (data, status, headers, config) {
				$scope.person = data;
				console.log(data);
				debugger; });
	}

}]);