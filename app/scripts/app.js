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
    'ngTouch',
    'ui.bootstrap'
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
  })
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }
  ])
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:8000/**', 'http://localhost:8000/**']);

 }]);
    
