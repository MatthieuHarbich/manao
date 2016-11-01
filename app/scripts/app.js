'use strict';

/**
 * @ngdoc overview
 * @name manaoApp
 * @description
 * # manaoApp
 *
 * Main module of the application.
 */
angular
  .module('manaoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl',
        controllerAs: 'form'
      })
      .otherwise({
        redirectTo: '/form'
      });
  });
