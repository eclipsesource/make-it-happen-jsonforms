angular.module('MiHexample')
    .directive('myBooleanControl', function() {
        return {
            restrict: 'E',
            controller: ['BaseController', '$scope', function(BaseController, $scope) {
                BaseController.call( this, $scope );
            }],
            controllerAs: 'vm',
            templateUrl: './renderer/my-boolean.control.html'
        };
    })
    .run(['RendererService', 'JSONFormsTesters', function(RendererService, Testers) {
        RendererService.register('my-boolean-control', Testers.and(
            Testers.uiTypeIs('Control'),
            Testers.schemaTypeIs('boolean')
        ), 10);
    }]);
