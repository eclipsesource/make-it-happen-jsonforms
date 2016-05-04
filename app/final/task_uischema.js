angular.module('MiHexample')
.value("UISchema",
{
    "type": "VerticalLayout",
    "elements": [
      {
          "type": "Control",
          "label": "Name",
          "scope": {
            "$ref": "#/properties/name"
          }
        },
        {
          "type": "Control",
          "label": "Description",
          "scope": {
            "$ref": "#/properties/description"
          },
          "options": {
              "multi":true
          }
        },
        {
          "type": "Control",
          "label": "Done?",
          "scope": {
            "$ref": "#/properties/done"
          }
        },
        {
          "type": "Control",
          "label": "Comments",
          "scope": {
            "$ref": "#/properties/comments"
          },
          "options": {
              "simple":true
          }
      }
    ]
});
