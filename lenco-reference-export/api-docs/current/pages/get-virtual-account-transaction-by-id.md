Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts/transactions/:transaction-id

Retrieve information about a specific successful transaction that occurred on a virtual account

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
        "id": string,
        "transactionAmount": string,
        "fee": string,
        "stampDuty": string,
        "settlementAmount": string,
        "currency": string,
        "type": "credit",
        "status": "successful",
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
            "type": "Static Virtual Account"|"Dynamic Virtual Account",
            "status": "active"|"expired"|"blacklisted"|"deleted",
            "createdAt": date-time,
            "expiresAt": date-time|null,
            "currency": string,
            "meta": {
                "isStatic": boolean,
                "bvn": string|null,
                "transactionReference": string|null,
                "amount": string|null,
                "minAmount": string|null
            }
        },
        "accountReference": string,
        "settlementAccountId": string,
        "datetime": date-time,
        "nipSessionId": string,
        "transactionReference": string | null,
        "settlementStatus": "pending" | "settled"
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
    "/virtual-accounts/transactions/{transaction-id}": {
      "get": {
        "summary": "/virtual-accounts/transactions/:transaction-id",
        "description": "Retrieve information about a specific successful transaction that occurred on a virtual account",
        "operationId": "get-virtual-account-transaction-by-id",
        "parameters": [
          {
            "name": "transaction-id",
            "in": "path",
            "description": "The id of the successful transaction",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"id\": \"2bbaa312-8bd6-4cab-92fd-b4dd25b96e7e\",\n        \"transactionAmount\": \"110.00\",\n        \"fee\": \"1.65\",\n        \"stampDuty\": \"0.00\",\n        \"settlementAmount\": \"108.35\",\n        \"currency\": \"NGN\",\n        \"type\": \"credit\",\n        \"status\": \"successful\",\n        \"narration\": \"VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009\",\n        \"details\": {\n            \"accountName\": \"OGAVENUE- ACCOUNT A\",\n            \"accountNumber\": \"0000000069\",\n            \"bank\": {\n                \"name\": \"Providus Bank\",\n                \"code\": \"000023\"\n            }\n        },\n        \"virtualAccount\": {\n            \"id\": \"d0ca79a4-92a7-45f2-b9eb-57c10584bb88\",\n            \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n            \"bankAccount\": {\n                \"accountName\": \"LENCO(Andre Ali)\",\n                \"accountNumber\": \"9999000048\",\n                \"bank\": {\n                    \"code\": \"000023\",\n                    \"name\": \"PROVIDUS BANK\"\n                }\n            },\n            \"type\": \"Static Virtual Account\",\n            \"status\": \"active\",\n            \"createdAt\": \"2021-11-02T17:16:56.424Z\",\n            \"expiresAt\": null,\n            \"currency\": \"NGN\",\n            \"meta\": {\n                \"isStatic\": true,\n                \"bvn\": \"22202******\",\n                \"transactionReference\": null,\n                \"amount\": null,\n                \"minAmount\": null\n            }\n        },\n        \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n        \"settlementAccountId\": \"3ec7dbca-7bf3-486f-9e08-958d0e8e885d\",\n        \"datetime\": \"2021-11-02T19:10:20.000Z\",\n        \"nipSessionId\": \"211102000000000000000000000009\",\n        \"transactionReference\": null,\n        \"settlementStatus\": \"settled\"\n    }\n}"
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
                          "example": "2bbaa312-8bd6-4cab-92fd-b4dd25b96e7e"
                        },
                        "transactionAmount": {
                          "type": "string",
                          "example": "110.00"
                        },
                        "fee": {
                          "type": "string",
                          "example": "1.65"
                        },
                        "stampDuty": {
                          "type": "string",
                          "example": "0.00"
                        },
                        "settlementAmount": {
                          "type": "string",
                          "example": "108.35"
                        },
                        "currency": {
                          "type": "string",
                          "example": "NGN"
                        },
                        "type": {
                          "type": "string",
                          "example": "credit"
                        },
                        "status": {
                          "type": "string",
                          "example": "successful"
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
                        "settlementAccountId": {
                          "type": "string",
                          "example": "3ec7dbca-7bf3-486f-9e08-958d0e8e885d"
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
                        "settlementStatus": {
                          "type": "string",
                          "example": "settled"
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
  "_id": "60633ad0d7e9d4000f4916b9:61824683879adf002f46ea79"
}
```
