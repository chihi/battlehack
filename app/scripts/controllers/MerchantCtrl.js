'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('MerchantCtrl', function ($scope,$routeParams,appService, $location) {
    
   $scope.merchantId = $routeParams.id;

   $scope.merchantInfo = appService.getMerchantById($scope.merchantId)[0];

   $scope.selectedFood = [];

   $scope.selectIt = function(item)
   {
      console.log(item);
   		$scope.selectedFood.push({'id':item.id, 'name':item.item_name, 'price':item.price});
   }

   $scope.removeIt = function(index)
   {
   		console.log(index);
   		$scope.selectedFood.splice(index, 1);
   }

   $scope.confirm = function()
   {
   		$location.url('/register');
   }

  });
