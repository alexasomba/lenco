Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transfer/by-reference/:reference

Retrieve information about a specific bank transfer transaction using the reference

# OpenAPI definition

```json
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
    "/transfer/by-reference/{reference}": {
      "get": {
        "summary": "/transfer/by-reference/:reference",
        "description": "Retrieve information about a specific bank transfer transaction using the reference",
        "operationId": "get-transfer-by-reference",
        "parameters": [
          {
            "name": "reference",
            "in": "path",
            "description": "The reference (passed by the client) of the transaction.",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"request\": {\n      \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n      \"recipientId\": null,\n      \"accountNumber\": \"8144374977\",\n      \"bankCode\": \"000014\",\n      \"amount\": \"2000.00\",\n      \"narration\": \"Lenco / Testing api payment\",\n      \"reference\": \"reference-test-1\",\n      \"status\": \"created\"\n    },\n    \"transaction\": {\n      \"id\": \"46ce8b2d-457c-4d0f-a3bb-5fbfd0a230fa\",\n      \"amount\": \"2000.00\",\n      \"fee\": \"0.00\",\n      \"narration\": \"Lenco / Testing api payment\",\n      \"type\": \"debit\",\n      \"initiatedAt\": null,\n      \"completedAt\": null,\n      \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n      \"details\": {\n        \"accountName\": \"Shalewa Elizabeth\",\n        \"accountNumber\": \"8144374977\",\n        \"bank\": {\n          \"code\": \"000014\",\n          \"name\": \"ACCESS BANK\"\n        }\n      },\n      \"status\": \"failed\",\n      \"failedAt\": \"2021-03-30T14:34:52.000Z\",\n      \"reasonForFailure\": \"Insufficient funds in your account\",\n      \"clientReference\": \"reference-test-1\",\n      \"transactionReference\": \"276fc62654\",\n      \"nipSessionId\": \"000000000000000000134034230445\"\n    }\n  }\n}"
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
                              "example": "created"
                            }
                          }
                        },
                        "transaction": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string",
                              "example": "46ce8b2d-457c-4d0f-a3bb-5fbfd0a230fa"
                            },
                            "amount": {
                              "type": "string",
                              "example": "2000.00"
                            },
                            "fee": {
                              "type": "string",
                              "example": "0.00"
                            },
                            "narration": {
                              "type": "string",
                              "example": "Lenco / Testing api payment"
                            },
                            "type": {
                              "type": "string",
                              "example": "debit"
                            },
                            "initiatedAt": {},
                            "completedAt": {},
                            "accountId": {
                              "type": "string",
                              "example": "056ffebf-812a-433a-83a0-9c67cd8c089c"
                            },
                            "details": {
                              "type": "object",
                              "properties": {
                                "accountName": {
                                  "type": "string",
                                  "example": "Shalewa Elizabeth"
                                },
                                "accountNumber": {
                                  "type": "string",
                                  "example": "8144374977"
                                },
                                "bank": {
                                  "type": "object",
                                  "properties": {
                                    "code": {
                                      "type": "string",
                                      "example": "000014"
                                    },
                                    "name": {
                                      "type": "string",
                                      "example": "ACCESS BANK"
                                    }
                                  }
                                }
                              }
                            },
                            "status": {
                              "type": "string",
                              "example": "failed"
                            },
                            "failedAt": {
                              "type": "string",
                              "example": "2021-03-30T14:34:52.000Z"
                            },
                            "reasonForFailure": {
                              "type": "string",
                              "example": "Insufficient funds in your account"
                            },
                            "clientReference": {
                              "type": "string",
                              "example": "reference-test-1"
                            },
                            "transactionReference": {
                              "type": "string",
                              "example": "276fc62654"
                            },
                            "nipSessionId": {
                              "type": "string",
                              "example": "000000000000000000134034230445"
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
                    "value": "{\n    \"status\": false,\n    \"message\": \"Transaction was not found\",\n    \"data\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "message": {
                      "type": "string",
                      "example": "Transaction was not found"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {}
                      }
                    }
                  }
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
  "_id": "6063101eb8d5d7003e8aa44d:6825fa6cc72b2200759a24f8"
}
```
