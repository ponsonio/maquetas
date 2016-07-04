'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('NotasAlumno').
  component('notas', {
    templateUrl: 'notas/notas.template.html',
    controller:       
      function NotasController() {
        
        this.notasBimestre = [  
            {
              nombreCurso:"Historia del Perú" , id_curso:"1" ,notaFinal:"15.5", notas: [ "TA-11", "PARCIAL - 19", "TRABAJO - 18" ]  
            },
            {
              nombreCurso:"Matemática" , id_curso:"2" ,notaFinal:"--", notas: [ "TA-11", "PARCIAL - 19", "TRABAJO - 18" ]  
            }
        ];
      }
    
  });

