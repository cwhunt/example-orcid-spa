(function() {
  'use strict';

  angular
    .module('app')
    .constant('AUTHORIZE_URL', 'https://sandbox.orcid.org/oauth/authorize?client_id=APP-UI9MH0Q8TO2Q3IE5&response_type=code&scope=/authenticate&redirect_uri=https://example-orcid-api.herokuapp.com/auth?site_url=https://example-orcid.firebaseapp.com/%2523/auth')
}());
