Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transfer/bulk

Create a bulk transfer, currently only supporting bank transfer

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"reference\": string | null,\n \"stats\": { \n \"total\": number,\n \"successful\": number,\n \"failed\": number,\n \"pending\": number\n }\n }\n}",
"language": "json"
}
]
}
[/block]

# OpenAPI definition

````json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Lenco API",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://api.lenco.co/access/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "x-bearer-format": "bearer",
        "x-default": "xo+CAiijrIy9XvZCYyhjrv0fpSAL6CfU8CgA+up1NXqK"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/transfer/bulk": {
      "post": {
        "summary": "/transfer/bulk",
        "description": "Create a bulk transfer, currently only supporting bank transfer",
        "operationId": "create-bulk-transfer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["transfers"],
                "properties": {
                  "transfers": {
                    "type": "array",
                    "description": "Array of Transfer objects.<br>The transfer object is the same data passed to [create transaction](https://lenco-api.readme.io/reference/create-transaction)<br>**Limit:** Max number of transfer objects in a single request is 500.",
                    "items": {
                      "properties": {
                        "accountId": {
                          "type": "string",
                          "description": "Your 36-character account uuid to transfer from."
                        },
                        "recipientId": {
                          "type": "string",
                          "description": "Recipient ID from the recipients endpoint. Use this in place of accountNumber and bankCode code if you have the recipient details."
                        },
                        "accountNumber": {
                          "type": "string",
                          "description": "10 digit nuban. If you do not have the recipientId, use this and bankCode."
                        },
                        "bankCode": {
                          "type": "string",
                          "description": "If you do not have the recipientId, use bankCode and accountNumber."
                        },
                        "amount": {
                          "type": "string",
                          "description": "Amount of NGN you want to send, must be a positive number."
                        },
                        "narration": {
                          "type": "string",
                          "description": "The narration of the transaction."
                        },
                        "reference": {
                          "type": "string",
                          "description": "Unique client reference. Only `-`, `.`, `_` and alphanumeric characters allowed."
                        },
                        "senderName": {
                          "type": "string",
                          "description": "The name that will be displayed as the sender <br/>`Restricted feature`"
                        }
                      },
                      "required": [
                        "accountId",
                        "amount",
                        "narration",
                        "reference"
                      ],
                      "type": "object"
                    }
                  },
                  "reference": {
                    "type": "string",
                    "description": "Unique client reference for the bulk transfer. Only ```-```, ```.```, ```_``` and alphanumeric characters allowed."
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"id\": \"670243e6-3d25-4538-8f80-12e7eec318f7\",\n        \"reference\": \"ref-bulk-test-1\",\n        \"stats\": {\n            \"total\": 1,\n            \"successful\": 0,\n            \"failed\": 0,\n            \"pending\": 1\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "boolean",
                      "example": true,
                      "default": true
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string",
                          "example": "670243e6-3d25-4538-8f80-12e7eec318f7"
                        },
                        "reference": {
                          "type": "string",
                          "example": "ref-bulk-test-1"
                        },
                        "stats": {
                          "type": "object",
                          "properties": {
                            "total": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "successful": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "failed": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "pending": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": false,\n    \"message\": \"Duplicate bulk transfer reference\",\n    \"data\": [],\n    \"errorCode\": \"07\"\n}"
                  },
                  "With Errors": {
                    "value": "{\n    \"status\": false,\n    \"message\": \"Duplicate client reference\",\n    \"data\": [],\n    \"errorCode\": \"04\",\n    \"errors\": {\n        \"ref-test-1\": {\n            \"errorCode\": \"04\",\n            \"errorMessage\": \"Duplicate client reference\"\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "message": {
                          "type": "string",
                          "example": "Duplicate bulk transfer reference"
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
                          }
                        },
                        "errorCode": {
                          "type": "string",
                          "example": "07"
                        }
                      }
                    },
                    {
                      "title": "With Errors",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "message": {
                          "type": "string",
                          "example": "Duplicate client reference"
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
                          }
                        },
                        "errorCode": {
                          "type": "string",
                          "example": "04"
                        },
                        "errors": {
                          "type": "object",
                          "properties": {
                            "ref-test-1": {
                              "type": "object",
                              "properties": {
                                "errorCode": {
                                  "type": "string",
                                  "example": "04"
                                },
                                "errorMessage": {
                                  "type": "string",
                                  "example": "Duplicate client reference"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": false,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "60633ad0d7e9d4000f4916b9:63b6d0c95235fc0195a146a7"
}
````
