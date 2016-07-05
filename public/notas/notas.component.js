'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('NotasAlumno').
  component('notas', {
    templateUrl: 'notas/notas.template.html',
    controller: ['$http',
      function NotasController($http) {
         var self = this;
        $http.get('data/notas.json').then(function(response) {
          self.notasBimestre = response.data;
        });

      }    

    ]      
  });

