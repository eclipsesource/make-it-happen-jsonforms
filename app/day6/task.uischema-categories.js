angular.module('MiHexample')
.value("UISchema",
{
  "type": "Categorization",
  "elements": [
    {
      "type": "Category",
      "label": "Main",
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
          "type": "Control",
          "scope": {
            "$ref": "#/properties/description"
          },
          "options": {
              "multi":true
          }
        }
      ]
    },
    {
      "type": "Category",
      "label": "Additional",
      "elements": [
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
    }
  ]
});
