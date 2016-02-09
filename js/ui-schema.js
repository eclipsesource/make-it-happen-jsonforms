'use strict';

var app = angular.module('jsonforms-seed');
app.service('UISchemaService', function() {

    this.uiSchema = {
      "type": "Categorization",
      "elements": [
        {
          "type": "Category",
          "label": "General Information",
          "elements": [
            {
              "type": "Control",
              "label": "First Name",
              "scope": {
                "$ref": "#/properties/personalData/properties/firstName"
              }
            },
            {
              "type": "Control",
              "label": "Last Name",
              "scope": {
                "$ref": "#/properties/personalData/properties/lastName"
              }
            },
            {
              "type": "Control",
              "label": "Title",
              "scope": {
                "$ref": "#/properties/personalData/properties/title"
              }
            },
            {
              "type": "Control",
              "label": "Gender",
              "scope": {
                "$ref": "#/properties/personalData/properties/gender"
              }
            },
            {
              "type": "Control",
              "label": "Date Of Birth",
              "scope": {
                "$ref": "#/properties/personalData/properties/dateOfBirth"
              }
            }
          ]
        },
        {
          "type": "Category",
          "label": "Dietrary Requirements",
          "elements": [
            {
              "type": "Label",
              "text": " This is all optional information, but it helps us to serve you better with the right foods for you."
            },
            {
              "type": "Control",
              "label": "Diet",
              "scope": {
                "$ref": "#/properties/nutritionInformation/properties/diet"
              }
            },
            {
              "type": "Group",
              "elements": [
                {
                  "type": "Control",
                  "label": "Peanuts",
                  "scope": {
                    "$ref": "#/properties/nutritionInformation/properties/foodRestrictions/properties/peanuts"
                  }
                },
                {
                  "type": "Control",
                  "label": "Lactose",
                  "scope": {
                    "$ref": "#/properties/nutritionInformation/properties/foodRestrictions/properties/lactose"
                  }
                },
                {
                  "type": "Control",
                  "label": "Gluten",
                  "scope": {
                    "$ref": "#/properties/nutritionInformation/properties/foodRestrictions/properties/gluten"
                  }
                },
                {
                  "type": "Control",
                  "label": "Pork",
                  "scope": {
                    "$ref": "#/properties/nutritionInformation/properties/foodRestrictions/properties/pork"
                  }
                },
                {
                  "type": "Control",
                  "label": "Other",
                  "scope": {
                    "$ref": "#/properties/nutritionInformation/properties/foodRestrictions/properties/other"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "Category",
          "label": "Payment Information",
          "elements": [
            {
              "type": "Control",
              "label": "Cardnumber",
              "scope": {
                "$ref": "#/properties/paymentData/properties/cardnumber"
              }
            },
            {
              "type": "Control",
              "label": "Credit Card Type",
              "scope": {
                "$ref": "#/properties/paymentData/properties/creditCardType"
              }
            },
            {
              "type": "Control",
              "label": "Cardholder",
              "scope": {
                "$ref": "#/properties/paymentData/properties/cardholder"
              }
            },
            {
              "type": "HorizontalLayout",
              "elements": [
                {
                  "type": "Control",
                  "label": "Expiration Month",
                  "scope": {
                    "$ref": "#/properties/paymentData/properties/expirationMonth"
                  }
                },
                {
                  "type": "Control",
                  "label": "Expiration Year",
                  "scope": {
                    "$ref": "#/properties/paymentData/properties/expirationYear"
                  }
                },
                {
                  "type": "Control",
                  "label": "CVV",
                  "scope": {
                    "$ref": "#/properties/paymentData/properties/CVV"
                  }
                }
              ]
            }
          ]
        }
      ]
    };

});
