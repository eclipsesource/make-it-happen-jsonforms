angular.module('MiHexample.tasks', [])
.controller('TasksController', function() {
    var vm = this;
    vm.taskSchema = TASK_SCHEMA;
    vm.taskUISchema = TASK_UISCHEMA;
    vm.tasks=TASK_DATA;

    vm.selectDetail=function(taskId){
        vm.taskData = vm.tasks.filter(function (task) {
            return task.id===taskId;
        })[0];
    }
});
