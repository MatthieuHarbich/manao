'use strict';

/**
 * @ngdoc function
 * @name manaoApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the manaoApp
 */


 angular.module('manaoApp')
 .controller('FormCtrl', function ($scope) {


 	//** socket **//

 	console.log("hostname : " + window.location.hostname);
	//var socket = io.connect(window.location.hostname);
	var socket = io.connect("http://localhost:3000");


 	//** form **//
 	$scope.master = {};
 	$scope.update = function(form) {
 		$scope.master = angular.copy(form);
 		socket.emit('formToSave', $scope.master);
 	};

 	$scope.reset = function() {
 		$scope.form = angular.copy($scope.master);
 	};

 	$scope.reset();




 });


