'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('MerchantCtrl', function ($scope,$routeParams) {
    
   $scope.merchantId = $routeParams.id;

   
  });
