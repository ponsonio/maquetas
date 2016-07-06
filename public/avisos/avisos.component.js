'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('AvisosAlumno').
  component('avisos', {
    templateUrl: 'avisos/avisos.template.html',
    controller: ['$http','Avisos',
      function AvisosController($http,Avisos) {
        

         var self = this;

         /**
        $http.get('data/avisos.json').then(function(response) {
          self.avisos = response.data;
        });
        **/
        
        Avisos.all().then(function (data) {
          self.avisos  = data;
        });

        

      }    
    ]      
  });
