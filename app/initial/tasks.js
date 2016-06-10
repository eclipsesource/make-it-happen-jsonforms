angular.module('MiHexample', ['jsonforms'])
.controller('TasksController',['Schema','UISchema','Task', function(Schema,UISchema,Task) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskUISchema = UISchema;
    vm.taskData=Task;
}]);
