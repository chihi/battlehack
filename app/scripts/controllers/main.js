'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('MainCtrl', function ($scope) {
    

    $scope.merchantList = [
		{
			"name" : 'Swee Choon',
			"description" : 'Dim sum place',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'asdasd'

		},
		{
			"name" : 'KFC',
			"description" : 'Fast food place',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'asdasd'
		}

    ];

  });
