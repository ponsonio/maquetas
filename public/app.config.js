angular.
  module('siga').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/login', {
          template: '<login-form></login-form>'
        }).
        when('/notas/', {
          template: '<notas></notas>'
        }).
        otherwise('/login');
    }
  ]);