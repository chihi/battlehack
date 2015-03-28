'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('RegisterCtrl', function ($scope, appService, $location) {
    

    $scope.merchantList = appService.getMerchant();
   
 	$scope.proceed = function(user)
	{

		appService.register();
		console.log(user);
		$location.url('/summary');
	}   

  });
