angular.module('MiHexample.tasks.service', [])
  // A RESTful factory for retrieving tasks
  .factory('task_service', function () {
    var tasks=Promise.resolve(TASK_DATA).then(function(resp){return resp});
    var factory = {};
    factory.all = function () {
      return tasks;
    };
    factory.get = function (id) {
      return tasks.then(function(r_tasks){
        return r_tasks.filter(function(task){return task.id==id;})[0];
      })
    };
    return factory;
  });
