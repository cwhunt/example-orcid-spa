(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexController', [ '$rootScope', 'AUTHORIZE_URL',
    	function($rootScope, AUTHORIZE_URL) {
    var vm = this;

    $rootScope.authorize_url = AUTHORIZE_URL;
    console.log(vm.authorize_url);
  }]);
}());