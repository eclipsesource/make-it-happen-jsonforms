angular.module('MiHexample')
.value("UISchema",
{
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": false,
      "scope": {
        "$ref": "#/properties/done"
      }
    },
    {
      "type": "Control",
      "scope": {
        "$ref": "#/properties/name"
      }
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/due_date"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/rating"
          }
        }
      ]
    },
    {
      "type": "Control",
      "scope": {
        "$ref": "#/properties/description"
      },
      "options": {
          "multi":true
      }
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/recurrence"
          }
        },
        {
          "type": "Control",
          "scope": {
            "$ref": "#/properties/recurrence_interval"
          },
          "rule": {
              "effect": "HIDE",
              "condition": {
                  "scope": {
                      "$ref": "#/properties/recurrence"
                  },
                  "expectedValue": "Never"
              }
          }
        }
      ]
    }
  ]
});
