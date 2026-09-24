Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transactions

Create a new transaction, currently only supporting bank transfer

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
        "id": string,
        "amount": string,
        "fee": string,
        "narration": string,
        "type": "credit" | "debit",
        "initiatedAt": date-time | null,
        "completedAt": date-time | null,
        "accountId": string,
        "details": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
                "code": string,
                "name": string,
            }
        } | null,
        "status": "pending" | "successful" | "failed" | "declined",
        "failedAt": date-time | null,
        "reasonForFailure": string | null,
        "clientReference": string | null,
        "transactionReference": string,
			  "nipSessionId": string | null
    }
}
```

In the sandbox environment, you can simulate a failed transaction by performing a bank transfer to any of these accounts:

| Account Number | Bank Code | Error                                              |
| :------------- | :-------- | :------------------------------------------------- |
| 6257392194     | 000016    | Transfer Not Successful                            |
| 4000007863     | 000016    | Beneficiary Bank not Available                     |
| 0954428453     | 000015    | System Malfunction                                 |
| 0783199300     | 000015    | Timeout waiting for response from destination bank |
| 5858433191     | 000013    | Insufficient Balance in Debit Account              |

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
    "/transactions": {
      "post": {
        "summary": "/transactions",
        "description": "Create a new transaction, currently only supporting bank transfer",
        "operationId": "create-transaction",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": \"46ce8b2d-457c-4d0f-a3bb-5fbfd0a230fa\",\n        \"amount\": \"2000.00\",\n        \"fee\": \"0.00\",\n        \"narration\": \"Lenco / Testing api payment\",\n        \"type\": \"debit\",\n        \"initiatedAt\": null,\n        \"completedAt\": null,\n        \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n        \"details\": {\n            \"accountName\": \"Shalewa Elizabeth\",\n            \"accountNumber\": \"8144374977\",\n            \"bank\": {\n                \"code\": \"000014\",\n                \"name\": \"ACCESS BANK\"\n            }\n        },\n        \"status\": \"failed\",\n        \"failedAt\": \"2021-03-30T14:34:52.000Z\",\n        \"reasonForFailure\": \"Insufficient funds in your account\",\n        \"clientReference\": \"reference-test-1\",\n        \"transactionReference\": \"276fc62654\",\n\t\t\t  \"nipSessionId\": \"000000000000000000134034230445\"\n    }\n}"
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
                      "example": "Success"
                    },
                    "data": {
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
    "explorer-enabled": false,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "60633ad0d7e9d4000f4916b9:606390d8f216ca00236c0fe1"
}
````
