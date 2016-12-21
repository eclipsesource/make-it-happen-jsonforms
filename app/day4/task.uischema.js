angular.module('MiHexample')
.value("UISchema",
{
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "scope": {
        "$ref": "#/properties/name"
      }
    },
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
        "$ref": "#/properties/description"
      },
      "options": {
          "multi":true
      }
    },
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
});
