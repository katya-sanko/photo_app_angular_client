'use strict';

angular
  .module('sampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/app/views/login.html',
        controller: 'authController'
      })
      .when('/greetings', {
        templateUrl: '/app/views/greetings.html',
        controller: 'greetingsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
