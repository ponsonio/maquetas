'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('LoginAlumno').
  component('loginForm', {
    templateUrl: 'login/login.template.html',
    controller: ['$route','$location',
    function LoginController($route,$location) {
        this.irNotas = function(){
            $location.path('/notas/');
        }
      }    

    ]      

  });