Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts/rejected-transactions

Get only rejected transactions that occurred on your virtual accounts

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": {
    "rejectedTransactions": [
      {
        "id": string,
        "transactionAmount": string,
        "currency": string,
        "narration": string,
        "details": {
          "accountName": string,
          "accountNumber": string,
          "bank": {
            "name": string,
            "code": string,
          }
        },
        "virtualAccount": {
          "id": uuid,
          "accountReference": uuid,
          "bankAccount": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
              "code": string,
              "name": string
            }
          },
          "type": "Static Virtual Account" | "Dynamic Virtual Account",
          "status": "active" | "expired" | "blacklisted" | "deleted",
          "createdAt": date-time,
          "expiresAt": date-time | null,
          "currency": string,
          "meta": {
            "isStatic": boolean,
            "bvn": string | null,
            "transactionReference": string | null,
            "amount": string | null,
            "minAmount": string | null
          }
        },
        "accountReference": string,
        "datetime": date-time,
        "nipSessionId": string | null,
        "transactionReference": string | null,
        "reasonForRejection": {
          "code": string,
          "message": string
        }
      }
    ],
    "meta": {
      "total": number,
      "pageCount": number,
      "perPage": number,
      "currentPage": number,
    }
  }
}
```

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
    "/virtual-accounts/rejected-transactions": {
      "get": {
        "summary": "/virtual-accounts/rejected-transactions",
        "description": "Get only rejected transactions that occurred on your virtual accounts",
        "operationId": "get-rejected-virtual-account-transactions",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Specify exactly what page you want to retrieve. If not specified we use a default value of 1.",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "start",
            "in": "query",
            "description": "Earliest date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end",
            "in": "query",
            "description": "Latest date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "accountReference",
            "in": "query",
            "description": "Get rejected transactions for a single virtual account using it's account reference",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "transactionReference",
            "in": "query",
            "description": "Get rejected transactions for a single virtual account using the `transactionReference` that was passed when creating the account.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"rejectedTransactions\": [\n      {\n        \"id\": \"2bbaa312-8bd6-4cab-92fd-b4dd25b96e7f\",\n        \"transactionAmount\": \"110.00\",\n        \"currency\": \"NGN\",\n        \"narration\": \"VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009\",\n        \"details\": {\n          \"accountName\": \"OGAVENUE- ACCOUNT A\",\n          \"accountNumber\": \"0000000069\",\n          \"bank\": {\n            \"name\": \"Providus Bank\",\n            \"code\": \"000023\"\n          }\n        },\n        \"virtualAccount\": {\n          \"id\": \"d0ca79a4-92a7-45f2-b9eb-57c10584bb88\",\n          \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n          \"bankAccount\": {\n            \"accountName\": \"LENCO(Andre Ali)\",\n            \"accountNumber\": \"9999000048\",\n            \"bank\": {\n              \"code\": \"000023\",\n              \"name\": \"PROVIDUS BANK\"\n            }\n          },\n          \"type\": \"Static Virtual Account\",\n          \"status\": \"active\",\n          \"createdAt\": \"2021-11-02T17:16:56.424Z\",\n          \"expiresAt\": null,\n          \"currency\": \"NGN\",\n          \"meta\": {\n            \"isStatic\": true,\n            \"bvn\": \"22202******\",\n            \"transactionReference\": null,\n            \"amount\": null,\n            \"minAmount\": null\n          }\n        },\n        \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n        \"datetime\": \"2021-11-02T19:10:20.000Z\",\n        \"nipSessionId\": \"211102000000000000000000000009\",\n        \"transactionReference\": null,\n        \"reasonForRejection\": {\n          \"code\": \"11\",\n          \"message\": \"Duplicate payment\"\n        }\n      }\n    ],\n    \"meta\": {\n      \"total\": 1,\n      \"pageCount\": 1,\n      \"perPage\": 100,\n      \"currentPage\": 1\n    }\n  }\n}"
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
                        "rejectedTransactions": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string",
                                "example": "2bbaa312-8bd6-4cab-92fd-b4dd25b96e7f"
                              },
                              "transactionAmount": {
                                "type": "string",
                                "example": "110.00"
                              },
                              "currency": {
                                "type": "string",
                                "example": "NGN"
                              },
                              "narration": {
                                "type": "string",
                                "example": "VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009"
                              },
                              "details": {
                                "type": "object",
                                "properties": {
                                  "accountName": {
                                    "type": "string",
                                    "example": "OGAVENUE- ACCOUNT A"
                                  },
                                  "accountNumber": {
                                    "type": "string",
                                    "example": "0000000069"
                                  },
                                  "bank": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "example": "Providus Bank"
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "000023"
                                      }
                                    }
                                  }
                                }
                              },
                              "virtualAccount": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string",
                                    "example": "d0ca79a4-92a7-45f2-b9eb-57c10584bb88"
                                  },
                                  "accountReference": {
                                    "type": "string",
                                    "example": "3feff5b6-c772-4038-b265-09a77190d07f"
                                  },
                                  "bankAccount": {
                                    "type": "object",
                                    "properties": {
                                      "accountName": {
                                        "type": "string",
                                        "example": "LENCO(Andre Ali)"
                                      },
                                      "accountNumber": {
                                        "type": "string",
                                        "example": "9999000048"
                                      },
                                      "bank": {
                                        "type": "object",
                                        "properties": {
                                          "code": {
                                            "type": "string",
                                            "example": "000023"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "PROVIDUS BANK"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "Static Virtual Account"
                                  },
                                  "status": {
                                    "type": "string",
                                    "example": "active"
                                  },
                                  "createdAt": {
                                    "type": "string",
                                    "example": "2021-11-02T17:16:56.424Z"
                                  },
                                  "expiresAt": {},
                                  "currency": {
                                    "type": "string",
                                    "example": "NGN"
                                  },
                                  "meta": {
                                    "type": "object",
                                    "properties": {
                                      "isStatic": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "bvn": {
                                        "type": "string",
                                        "example": "22202******"
                                      },
                                      "transactionReference": {},
                                      "amount": {},
                                      "minAmount": {}
                                    }
                                  }
                                }
                              },
                              "accountReference": {
                                "type": "string",
                                "example": "3feff5b6-c772-4038-b265-09a77190d07f"
                              },
                              "datetime": {
                                "type": "string",
                                "example": "2021-11-02T19:10:20.000Z"
                              },
                              "nipSessionId": {
                                "type": "string",
                                "example": "211102000000000000000000000009"
                              },
                              "transactionReference": {},
                              "reasonForRejection": {
                                "type": "object",
                                "properties": {
                                  "code": {
                                    "type": "string",
                                    "example": "11"
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Duplicate payment"
                                  }
                                }
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
  "_id": "60633ad0d7e9d4000f4916b9:68e416b8d1e30d0997deaf55"
}
```
