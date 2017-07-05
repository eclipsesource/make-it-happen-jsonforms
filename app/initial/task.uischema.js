var UISchema =
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
            "$ref": "#/properties/done"
          }
        }
    ]
};
