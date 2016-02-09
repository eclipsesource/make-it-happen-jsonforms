'use strict';

var app = angular.module('jsonforms-seed', ['jsonforms']);
app.controller('MyController', ['$scope', 'SchemaService', 'UISchemaService', function($scope, SchemaService, UISchemaService) {

    $scope.schema = SchemaService.schema;

    $scope.uiSchema = UISchemaService.uiSchema; 

    $scope.data = {
        personalData: {}
    };
}]);
