(function () {
  var app = angular.module('siga', []);

  app.controller('LoginController', function () {
    this.img = 0;

     this.login = function () {
          this.img = 1;
      };
  });


  app.controller('TabsController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };

  });

  app.controller('UsuarioController', function(){ 
    this.alumno = {
      id: "001",
      nombre: "Jorge",
      apellpa: "Cabrera",
      apellma: "Chiappe",
      codigo : "19960200",
      ie : "Maria Reina", 
      grado : "3ro Sec" ,
      seccion: "A"
    };

  });

app.controller('AvisosController', function(){ 
    this.avisos = [
      
        {
          titulo:"Día de la madre", fecha:"23/08/2017" 
        },
        {
          titulo:"Visita Parque de las Leyendas", fecha:"24/08/2017"
        },
        {
          titulo:"Actuación Secundaría", fecha:"21/08/2017"
        },
        {
          titulo:"PAFA", fecha:"21/09/2017"
        }
    ];

  });


app.controller('TareasController', function(){ 
    this.tareas = [
      
        {
          titulo:"Maqueta", fechaEntrega:"23/08/2017", nombre_curso:"Historia del Perú" , id_curso:"1"  
        },
        {
          titulo:"Ejercicio Conjuntos", fecha:"24/08/2017" , nombre_curso:"Matemática" , id_curso:"2" 
        },
        {
          titulo:"Gerundios", fecha:"21/08/2017" , nombre_curso:"Lenguaje" , id_curso:"5"
        },
        {
          titulo:"Página Web", fecha:"21/09/2017", nombre_curso:"Computo" , id_curso:"4"
        }
    ];

  });


app.controller('NotasController', function(){ 
    this.notasBimestre = [
      
        {
          nombreCurso:"Historia del Perú" , id_curso:"1" ,notaFinal:"15.5", notas: [ "TA-11", "PARCIAL - 19", "TRABAJO - 18" ]  
        },
        {
          nombreCurso:"Matemática" , id_curso:"2" ,notaFinal:"--", notas: [ "TA-11", "PARCIAL - 19", "TRABAJO - 18" ]  
        }

    ];

  });



})();
