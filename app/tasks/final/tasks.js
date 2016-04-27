angular.module('MiHexample.tasks', ['MiHexample.tasks.service'])
.controller('TasksController', ['task_service','$scope',function(taskService,$scope) {
    var vm = this;
    vm.taskSchema = TASK_SCHEMA;

    vm.taskUISchema = TASK_UISCHEMA;

    taskService.all().then(function(resolve){
        vm.tasks = resolve;
        $scope.$apply();
    });
    vm.selectDetail=function(taskId){
        taskService.get(taskId).then(function(resolve){
            vm.taskData = resolve;
            $scope.$apply();
        });

    }
}]);
