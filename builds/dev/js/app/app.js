'use strict';

angular
  .module('app', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'templates/index.html',
        controller: 'IndexController',
        controllerAs: 'vm'
      })
      .state('auth', {
        url:'/auth',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
  }]);

