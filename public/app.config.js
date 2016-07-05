angular.
  module('siga').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/login', {
          template: '<login-form></login-form>'
        }).
        when('/avisos/', {
          template: '<avisos></avisos>'
        }).
        when('/notas/', {
          template: '<notas></notas>'
        }).
        otherwise('/login');
    }
  ]);