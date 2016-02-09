'use strict';

var app = angular.module('jsonforms-seed');
app.factory('SchemaService', function() {
    return {
        schema: {
          "type": "object",
          "properties": {
            "personalData": {
              "type": "object",
              "properties": {
                "firstName": {
                  "type": "string"
                },
                "lastName": {
                  "type": "string"
                },
                "title": {
                  "type": "string",
                  "enum": [
                    "Mrs",
                    "Mr",
                    "Dr",
                    "Prof"
                  ]
                },
                "gender": {
                  "type": "string",
                  "enum": [
                    "Female",
                    "Male",
                    "Undefined"
                  ]
                },
                "dateOfBirth": {
                  "type": "string",
                  "format": "date-time"
                }
              },
              "additionalProperties": false,
              "required": [
                "firstName",
                "lastName"
              ]
            },
            "nutritionInformation": {
              "type": "object",
              "properties": {
                "diet": {
                  "type": "string",
                  "enum": [
                    "Carnivore",
                    "Vegetarian",
                    "Vegan",
                    "Fruitarian"
                  ]
                },
                "foodRestrictions": {
                  "type": "object",
                  "properties": {
                    "peanuts": {
                      "type": "boolean"
                    },
                    "lactose": {
                      "type": "boolean"
                    },
                    "gluten": {
                      "type": "boolean"
                    },
                    "pork": {
                      "type": "boolean"
                    },
                    "other": {
                      "type": "string"
                    }
                  },
                  "additionalProperties": false
                }
              },
              "additionalProperties": false
            },
            "paymentData": {
              "type": "object",
              "properties": {
                "cardnumber": {
                  "type": "integer"
                },
                "creditCardType": {
                  "type": "string",
                  "enum": [
                    "Visa",
                    "Mastercard",
                    "AmericanExpress"
                  ]
                },
                "cardholder": {
                  "type": "string"
                },
                "expirationMonth": {
                  "type": "integer"
                },
                "expirationYear": {
                  "type": "integer"
                },
                "CVV": {
                  "type": "integer"
                }
              },
              "additionalProperties": false,
              "required": [
                "cardnumber"
              ]
            },
            "id": {
              "type": "string"
            },
            "registrationTime": {
              "type": "string",
              "format": "date-time"
            }
          },
          "additionalProperties": false
        }
    }
});
