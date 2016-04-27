var TASK_UISCHEMA={
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
          },
          "options": {
              "multi":true
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
