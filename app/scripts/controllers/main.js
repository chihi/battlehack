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
			"id":1,
			"name" : 'Swee Choon',
			"description" : 'Cras justo odio, dapibus ac facilisis in. montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'10'

		},
		{
			"id":2,
			"name" : 'KFC',
			"description" : 'Fast food place',
			"phone_number": '12313123',
			"email" : 'sasdas',
			"queing_no":'7'
		}

    ];

  });
