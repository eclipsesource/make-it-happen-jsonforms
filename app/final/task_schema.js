angular.module('MiHexample')
.value("Schema",
{
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "done": {
        "type": "boolean"
      },
      "comments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "date": {
              "type": "string",
              "format": "date-time"
            }
          }
        }
      }
    }
});
