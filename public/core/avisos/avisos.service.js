'use strict';

angular.
  module('core.avisos').
  factory('Avisos',['$resource', '$q', '$http',
    function($resource,$q, $http) 
    {

      function all() {
        
        var deferred = $q.defer();
        $http.get('/data/avisos.json')
          .success(function (data) {
            deferred.resolve(data);
          }); 

        return deferred.promise;
      
      }


      return {
          all: all
        };
      
      }
  ]);