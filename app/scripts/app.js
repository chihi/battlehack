'use strict';

/**
 * @ngdoc overview
 * @name battlehackApp
 * @description
 * # battlehackApp
 *
 * Main module of the application.
 */
angular
  .module('battlehackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/merchant/:id', {
        templateUrl: 'views/merchant.html',
        controller: 'MerchantCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
