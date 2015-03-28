'use strict';

/**
 * @ngdoc function
 * @name battlehackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battlehackApp
 */
angular.module('battlehackApp')
  .controller('MainCtrl', function ($scope, appService) {
    

    $scope.merchantList = appService.getMerchant();
   

  });
