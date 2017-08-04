var Schema=
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
      }
    },
    "required": ["name"]
};
