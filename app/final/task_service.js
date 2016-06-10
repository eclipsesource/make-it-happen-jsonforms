// A RESTful factory for retrieving tasks
angular.module('MiHexample.service', ['ngResource'])
  .factory('Tasks',['$resource', function ($resource) {
      return $resource('http://localhost:3004/tasks/:taskId',{ taskId: '@id' }, {
        'update': { method:'PUT' }
    });
  }]);
