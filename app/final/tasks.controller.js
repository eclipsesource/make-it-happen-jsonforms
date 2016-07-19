angular.module('MiHexample', ['MiHexample.service','jsonforms-bootstrap'])
.controller('TasksController', ['Schema','UISchema','Tasks','$scope',function(Schema,UISchema,Tasks,$scope) {
    var vm = this;
    vm.taskSchema = Schema;
    vm.taskUISchema = UISchema;
    vm.tasks=Tasks.query();
    vm.dataLoaded=false;

    vm.query = function() {
        Tasks.query(function(response){
            vm.tasks = response;
        })
    };
    vm.selectDetail=function(taskId){
        vm.dataLoaded=false;
        vm.selectedId=taskId;
        vm.taskData = Tasks.get({taskId: taskId}, function() {
            vm.dataLoaded=true;
        });
    };
    vm.save=function(){
        vm.taskData.$update(function(){
            vm.query();
        });
    };
    vm.remove=function(id){
        vm.dataLoaded=false;
        vm.taskData=undefined;
        let toDelete = Tasks.get({taskId: id}, function() {
            toDelete.$delete(function(){
                vm.query();
            });
        });
    };
    vm.addNew=function(){
        new Tasks({name:"New Task"}).$save(function(){
            vm.query();
        });
    };
    vm.close=function(){
        vm.dataLoaded=false;
        vm.taskData=null;
        vm.selectedId=null;
    }
    vm.query();
}])
