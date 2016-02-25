angular.module('MiHexample.tasks', [
  'ui.router'
])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/tasks');

  $stateProvider
    .state('tasks', {
      url: '/tasks',
      templateUrl: 'tasks/tasks.html',
      resolve: {
        tasks: ['tasks', function (tasks) {
          return tasks.all();
        }]
      },
      controller: ['$scope', 'tasks', function ($scope, tasks) {
        $scope.tasks = tasks;
      }]
    })

    .state('tasks.detail', {
      url: '/:taskId',
      templateUrl: 'tasks/task_detail.html',
      controller: ['$scope', '$stateParams', 'utils', function ($scope, $stateParams, utils) {
        $scope.taskSchema = {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "due-date": {
              "type": "string",
              "format": "date-time"
            },
            "comments": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "date": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          }
        };

        $scope.taskUISchema = {
          "type": "VerticalLayout",
            "elements": [
              {
                "type": "Control",
                "label": "Title",
                "scope": {
                  "$ref": "#/properties/title"
                }
              },
              {
                "type": "Control",
                "label": "Description",
                "scope": {
                  "$ref": "#/properties/description"
                }
              },
              {
                "type": "Control",
                "label": "Due Date",
                "scope": {
                  "$ref": "#/properties/due-date"
                }
              },
              {
                "type": "Control",
                "label": "Comments",
                "scope": {
                  "$ref": "#/properties/comments"
                }
              }
          ]
        };

        $scope.taskData = utils.findById($scope.tasks, $stateParams.taskId);
      }]
    })
}]);
