angular.module('MiHexample')
    .directive('ratingControl', function() {
        return {
            restrict: 'E',
            controller: ['BaseController', '$scope', function(BaseController, $scope) {
                var vm = new BaseController($scope);
                vm.max = function() {
                    if (vm.resolvedSchema.maximum !== undefined) {
                        return vm.resolvedSchema.maximum;
                    } else {
                        return 5;
                    }
                };
                return vm;
            }],
            controllerAs: 'vm',
            templateUrl: './renderer/rating.control.html'
        };
    })
    .run(['RendererService', 'JSONFormsTesters', function(RendererService, Testers) {
        RendererService.register('rating-control', Testers.and(
            Testers.uiTypeIs('Control'),
            Testers.schemaTypeIs('integer'),
            Testers.schemaPropertyName('rating')
        ), 10);
    }]);
