angular.module('MiHexample')
.directive('myArrayControl',function(){
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
            vm.size=100;

            var resolvedSubSchema = pathResolver.resolveSchema(schema, indexedSchemaPath);
            var items = resolvedSubSchema.items;
            vm.properties = _.keys(items['properties']);
            vm.arraySchema = items;
        }],
        controllerAs:'vm',
        template: '<jsonforms-layout>'
            + '<fieldset>'
                + '<legend>{{vm.label}}</legend>'
                + "<div ng-repeat='data in vm.modelValue[vm.fragment]'>"
                    + "<div ng-repeat='prop in vm.properties'>"
                        + "<strong>{{prop | capitalize}}:</strong> {{data[prop]}}"
                    + "</div>"
                    + '<hr ng-show="!$last">'
                + '</div>'
                + "<span ng-if='vm.modelValue[vm.fragment]==undefined || vm.modelValue[vm.fragment].length==0'>"
                + 'No Comments yet'
                + '</span>'
            + '</fieldset>'
            + '<hr class="creation-separator"/>'
            + '<h4>New Entry:</h4>'
            + '<jsonforms schema="vm.arraySchema" data="vm.submitElement"></jsonforms>'
            + '<input class="btn btn-primary" type="button" value="Add to {{vm.label}}" ng-click="vm.submitCallback()" ng-model="vm.submitElement"></input>'
        + '</jsonforms-layout>'
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
        RendererService.register('my-array-control', MyArrayControlTester('array', 2));
        }
    ])
;
