var Schema =
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
      "rating": {
        "type": "integer",
        "maximum": 5
      },
      "done": {
        "type": "boolean"
      },
      "due_date":{
        "type": "string",
        "format": "date"
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
              "format": "date"
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
};
