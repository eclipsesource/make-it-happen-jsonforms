angular.module('MiHexample')
.value("Schema",
{
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 3
      },
      "description": {
        "type": "string"
      },
      "done": {
        "type": "boolean"
      },
      "due_date":{
        "type": "string",
        "format": "date-time"
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
    },
    "recurrence": {
        "type": "string",
        "enum":["Never","Daily","Weekly","Monthly"]
    },
    "recurrence_interval":{
        "type": "integer"
    }
  },
  "required": ["name"]
});
