var TASK_SCHEMA={
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
