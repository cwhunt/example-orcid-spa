(function() {
  'use strict';

  angular
    .module('app')
    .controller('AlertsController', ['$rootScope', function($rootScope) {
    console.log("AlertsController");
    $rootScope.alerts = [];

    $rootScope.closeAlert = function(index) {
      console.log("AlertsController::closeAlert");
      $rootScope.alerts.splice(index, 1);
    };
  }]);
}());
