(function() {
  'use strict';

  angular
    .module('app')
    .controller('AuthController', [ '$rootScope', '$location', 
    	function($rootScope, $location) {
    var vm = this;

		var params = $location.search();
		if (params.name) {
			$rootScope.alerts.push({type: 'info', msg: 'Welcome, ' + params.name});
		}
  }]);
}());