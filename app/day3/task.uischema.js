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
    }
  ]
});
