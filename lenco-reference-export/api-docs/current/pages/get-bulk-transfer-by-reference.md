Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transfer/bulk/by-reference/:reference

Retrieve information about a bulk transfer using the reference

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"reference\": string | null,\n \"stats\": { \n \"total\": number,\n \"successful\": number,\n \"failed\": number,\n \"pending\": number\n },\n \t\"transactions\": [\n {\n \"id\": string,\n \"amount\": string, \n \"fee\": string,\n \"narration\": string,\n \"type\": \"credit\" | \"debit\",\n \"initiatedAt\": date-time | null,\n \"completedAt\": date-time | null,\n \"accountId\": string,\n \"details\": { \n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n } | null,\n \"status\": \"pending\" | \"successful\" | \"failed\" | \"declined\",\n \"failedAt\": date-time | null,\n \"reasonForFailure\": string | null,\n \"clientReference\": string | null,\n \"transactionReference\": string,\n\t\t\t \"nipSessionId\": string | null\n },\n ],\n \"meta\": {\n \"total\": number,\n \"pageCount\": number,\n \"perPage\": number,\n \"currentPage\": number,\n }\n }\n}",
"language": "json"
}
]
}
[/block]

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
    "/transfer/bulk/by-reference/{reference}": {
      "get": {
        "summary": "/transfer/bulk/by-reference/:reference",
        "description": "Retrieve information about a bulk transfer using the reference",
        "operationId": "get-bulk-transfer-by-reference",
        "parameters": [
          {
            "name": "reference",
            "in": "path",
            "description": "The reference (passed by the client) of the bulk transfer",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": \"670243e6-3d25-4538-8f80-12e7eec318f7\",\n        \"reference\": \"\",\n        \"stats\": {\n            \"total\": 1,\n            \"successful\": 0,\n            \"failed\": 1,\n            \"pending\": 0\n        },\n        \"transactions\": [\n            {\n                \"id\": \"46ce8b2d-457c-4d0f-a3bb-5fbfd0a230fa\",\n                \"amount\": \"2000.00\",\n                \"fee\": \"0.00\",\n                \"narration\": \"Lenco / Testing api payment\",\n                \"type\": \"debit\",\n                \"initiatedAt\": null,\n                \"completedAt\": null,\n                \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n                \"details\": {\n                    \"accountName\": \"Shalewa Elizabeth\",\n                    \"accountNumber\": \"8144374977\",\n                    \"bank\": {\n                        \"code\": \"000014\",\n                        \"name\": \"ACCESS BANK\"\n                    }\n                },\n                \"status\": \"failed\",\n                \"failedAt\": \"2021-03-30T14:34:52.000Z\",\n                \"reasonForFailure\": \"Insufficient funds in your account\",\n                \"clientReference\": \"reference-test-1\",\n                \"transactionReference\": \"276fc62654\",\n                \"nipSessionId\": \"000000000000000000134034230445\"\n            }\n        ],\n        \"meta\": {\n            \"total\": 1,\n            \"pageCount\": 1,\n            \"perPage\": 100,\n            \"currentPage\": 1\n        }\n    }\n}"
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
                          "example": "670243e6-3d25-4538-8f80-12e7eec318f7"
                        },
                        "reference": {
                          "type": "string",
                          "example": ""
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
                              "example": 1,
                              "default": 0
                            },
                            "pending": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            }
                          }
                        },
                        "transactions": {
                          "type": "array",
                          "items": {
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
                        },
                        "meta": {
                          "type": "object",
                          "properties": {
                            "total": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "pageCount": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "perPage": {
                              "type": "integer",
                              "example": 100,
                              "default": 0
                            },
                            "currentPage": {
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
                    "value": "{\n    \"status\": false,\n    \"message\": \"Bulk Transfer was not found\",\n    \"data\": []\n}"
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
                      "example": "Bulk Transfer was not found"
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
    "explorer-enabled": false,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "60633ad0d7e9d4000f4916b9:63b6d10290066f0031fe985b"
}
```
