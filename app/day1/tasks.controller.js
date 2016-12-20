angular.module('MiHexample', ['jsonforms','jsonforms-bootstrap'])
.controller('TasksController',['Schema','Task', function(Schema,Task) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskData=Task;
}]);
