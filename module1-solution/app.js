//iife - closure no local variables bleed into global scope

(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', functionName);//module returns module instance
	
	functionName.$inject=['$scope']//inject $scope service in a minificationproof way
	
	function functionName($scope){
		$scope.inputData=''; //bound to input tag via ng-model attribute
		$scope.outputData=''; //
		$scope.makeOutput = function () {
			if ($scope.inputData=='') 
				$scope.outputData='Please enter data first';
			else if ($scope.inputData.split(',').length<=3)
				$scope.outputData='Enjoy!' ;
			else
				$scope.outputData='Too much!';
		//console.log($scope);
		}
	}//functionName
})();