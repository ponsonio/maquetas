'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('AvisosAlumno').
  component('avisos', {
    templateUrl: 'avisos/avisos.template.html',
    controller: ['$http',
      function AvisosController($http) {
         var self = this;
        $http.get('data/avisos.json').then(function(response) {
          self.avisos = response.data;
        });

      }    

    ]      
  });