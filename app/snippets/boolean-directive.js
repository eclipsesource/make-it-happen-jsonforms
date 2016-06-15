angular.module('MiHexample')
.directive('myBooleanControl',function(){
    return {
        restrict: 'E',
        controller: ['$scope', 'PathResolver',function(scope, pathResolver){
            var vm=this;
            vm.submitCallback=function() {
                if (vm.modelValue[vm.fragment] === undefined) {
                    vm.modelValue[vm.fragment] = [];
                }
                vm.modelValue[vm.fragment].push(_.clone(vm.submitElement));
            };
            vm.submitElement={};

            var services = scope['services'];
            var uiSchema = scope['uiSchema'];
            var schema = services.get(2).getSchema();
            var data = services.get(1).getData();
            var indexedSchemaPath = uiSchema['scope']['$ref'];
            vm.fragment = pathResolver.lastFragment(uiSchema.scope.$ref);
            vm.modelValue = pathResolver.resolveToLastModel(data, uiSchema.scope.$ref);
            vm.label=uiSchema.label;
            if(vm.label==undefined)
                vm.label=vm.fragment.charAt(0).toUpperCase()+vm.fragment.substr(1);
        }],
        controllerAs:'vm',
        template: '<jsonforms-control>'
            + '<input type="radio" id="{{vm.id}}" class="jsf-control-boolean" ng-model="vm.modelValue[vm.fragment]" ng-change="vm.modelChanged()" ng-disabled="vm.uiSchema.readOnly" ng-value="true"/>'
            + '{{vm.label}}'
            + '<span style="min-width: 50px;display: inline-block;"/>'
            + '<input type="radio" id="{{vm.id}}" class="jsf-control-boolean" ng-model="vm.modelValue[vm.fragment]" ng-change="vm.modelChanged()" ng-disabled="vm.uiSchema.readOnly" ng-value="false"/>'
            + 'Not {{vm.label}}'
        + '</jsonforms-control>'
    };
})
.run(['RendererService', function(RendererService) {
        var MyArrayControlTester=function(type, specificity) {
            return function (element, dataSchema, dataObject, pathResolver ) {

                if (element.type !== 'Control') {
                    return -1;
                }
                var currentDataSchema = pathResolver.resolveSchema(dataSchema, element['scope']['$ref']);
                if (currentDataSchema === undefined || currentDataSchema.type !== type) {
                    return -1;
                }
                return specificity;
            };
        };
        RendererService.register('my-boolean-control', MyArrayControlTester('boolean', 10));
        }
    ])
;
