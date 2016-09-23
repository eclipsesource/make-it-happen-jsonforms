angular.module('MiHexample', ['MiHexample.service', 'jsonforms', 'jsonforms-bootstrap', 'ui.bootstrap'])
    .controller('TasksController', ['Schema', 'UISchema', 'Tasks', function(Schema, UISchema, Tasks) {
        var vm = this;
        vm.taskSchema = Schema;
        vm.taskUISchema = UISchema;
        vm.tasks=Tasks.query();
        vm.dataLoaded=false;

        vm.query = function() {
            Tasks.query(function(response){
                vm.tasks = response;
            });
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
            var toDelete = Tasks.get({taskId: id}, function() {
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
        };
        vm.query();
    }]);
