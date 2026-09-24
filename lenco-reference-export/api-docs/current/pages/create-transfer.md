Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transfer

Create a new bank transfer transaction

This endpoint is similar to the [create transaction](https://lenco-api.readme.io/reference/create-transaction) endpoint, but this endpoint queues the request and returns a response instantly.

In the response, `data.request.status` will be either `queued` or `created`.\
If the status is `queued`, this means that the transaction has not yet been attempted and is still in the queue.\
If the status is `created`, this means that the transaction was created and has been (or is being) attempted. `data.transaction` will have a value and you should check `data.transaction.status` to get the transaction status (i.e. `successful`, `failed`, etc)

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
      "url": "https://sandbox.lenco.co/access/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "x-default": "xo+CAiijrIy9XvZCYyhjrv0fpSAL6CfU8CgA+up1NXqK",
        "x-bearer-format": "bearer"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/transfer": {
      "post": {
        "summary": "/transfer",
        "description": "Create a new bank transfer transaction",
        "operationId": "create-transfer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["accountId", "amount", "narration", "reference"],
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
                    "description": "Unique client reference. Only ```-```, ```.```, ```_``` and alphanumeric characters allowed."
                  },
                  "senderName": {
                    "type": "string",
                    "description": "The name that will be displayed as the sender <br/>`Restricted feature`"
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"request\": {\n            \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n            \"recipientId\": null,\n            \"accountNumber\": \"8144374977\",\n            \"bankCode\": \"000014\",\n            \"amount\": \"2000.00\",\n            \"narration\": \"Lenco / Testing api payment\",\n            \"reference\": \"reference-test-1\",\n            \"status\": \"queued\"\n        },\n        \"transaction\": null\n    }\n}"
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
                        "request": {
                          "type": "object",
                          "properties": {
                            "accountId": {
                              "type": "string",
                              "example": "056ffebf-812a-433a-83a0-9c67cd8c089c"
                            },
                            "recipientId": {},
                            "accountNumber": {
                              "type": "string",
                              "example": "8144374977"
                            },
                            "bankCode": {
                              "type": "string",
                              "example": "000014"
                            },
                            "amount": {
                              "type": "string",
                              "example": "2000.00"
                            },
                            "narration": {
                              "type": "string",
                              "example": "Lenco / Testing api payment"
                            },
                            "reference": {
                              "type": "string",
                              "example": "reference-test-1"
                            },
                            "status": {
                              "type": "string",
                              "example": "queued"
                            }
                          }
                        },
                        "transaction": {}
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
                    "value": "{\n    \"status\": false,\n    \"message\": \"Duplicate client reference\",\n    \"data\": []\n}"
                  },
                  "Result with errors": {
                    "value": "{\n    \"status\": false,\n    \"message\": \"Duplicate client reference\",\n    \"data\": [],\n    \"errorCode\": \"04\",\n    \"errors\": {\n        \"reference-test-1\": {\n            \"errorCode\": \"04\",\n            \"errorMessage\": \"Duplicate client reference\"\n        }\n    }\n}"
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
                          "example": "Duplicate client reference"
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
                          }
                        }
                      }
                    },
                    {
                      "title": "Result with errors",
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
                            "reference-test-1": {
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
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "6063101eb8d5d7003e8aa44d:6825f608c5e3f5005f845b48"
}
````
