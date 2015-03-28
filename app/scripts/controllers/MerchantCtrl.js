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

   var exist = false;

   $scope.selectIt = function(index, item)
   {
      console.log("index "+index);
      
      if ($scope.selectedFood.length > 0)
      {
        angular.forEach($scope.selectedFood, function(val,key){
          
          console.log("val id: "+val.id +", item id: "+item.item_id);

          if (val.id == item.item_id)
          {
            exist = true;
            $scope.selectedFood[key].qty += item.qty;
          }
          else
          {
            exist = false;
          }

        });
      }


      if (!exist)
      {
        $scope.selectedFood.push({'id':item.item_id, 'name':item.item_name, 'price':item.price, 'qty':item.qty});
        // $scope.selectedFood[key].qty += item.qty;
      }
      // angular.forEach($scope.selectedFood, function(value, key) {
      //   console.log("key: "+key);
      // });
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
