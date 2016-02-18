angular.module('MiHexample.tasks.service', [

  ])

  // A RESTful factory for retrieving tasks from 'tasks.json'
  .factory('tasks', ['$http', 'utils', function ($http, utils) {
    var path = 'assets/tasks.json';
    var tasks = $http.get(path).then(function (resp) {
      return resp.data.tasks;
    });

    var factory = {};
    factory.all = function () {
      return tasks;
    };
    factory.get = function (id) {
      return tasks.then(function(){
        return utils.findById(tasks, id);
      })
    };
    return factory;
  }]);