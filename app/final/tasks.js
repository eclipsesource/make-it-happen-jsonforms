angular.module('MiHexample', ['MiHexample.service','jsonforms'])
.controller('TasksController', ['Schema','UISchema','Tasks','$scope',function(Schema,UISchema,Tasks,$scope) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskUISchema = UISchema;
    vm.tasks=Tasks.query();

    vm.query = function() {
        Tasks.query(function(response){
            vm.tasks = response;
        })
    };
    vm.selectDetail=function(taskId){
        vm.selectedId=taskId;
        vm.taskData = Tasks.get({taskId: taskId}, function() {});
    };
    vm.save=function(){
        vm.taskData.$update(function(){
            vm.query();
        });
    };
    vm.remove=function(){
        vm.taskData.$delete(function(){
            vm.taskData=undefined;
            vm.query();
        });
    };
    vm.addNew=function(){
        new Tasks({}).$save(function(){
            vm.query();
        });
    };
    vm.query();
}])
