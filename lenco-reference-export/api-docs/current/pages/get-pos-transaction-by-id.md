Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/transactions/:id

Retrieve information about a specific POS transaction

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": {
    "transaction": {
      "id": string,
      "reference": string,
      "amount": string,
      "stampDuty": string | null,
      "fee": string | null,
      "settlementAmount": string | null,
      "type": "card-payment" | "transfer",
      "status": "successful" | "failed",
      "datetime": date-time,
      "message": string,
      "cardPayment": {
        "pan": string,
        "stan": string,
        "rrn": string,
        "responseCode": string | null,
        "responseMessage": string | null
      } | null,
      "transfer": {
        "sender": string | null,
        "description": string,
        "sessionId": string | null
      } | null,
      "terminal": {
        "id": string,
        "name": string,
        "address": string | null,
        "phone": string | null,
        "serialNumber": string,
        "model": string | null,
        "assignedAt": date-time,
        "settlementAccountId": string | null,
        "accountDetails": {
          "accountName": string,
          "accountNumber": string,
          "bankName": string,
        } | null,
        "status": "assigned" | "unassigned",
        "unassignedAt": date-time | null
      },
      "settlementStatus": "pending" | "successful" | "failed" | null
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
    "/point-of-sale/transactions/{id}": {
      "get": {
        "summary": "/point-of-sale/transactions/:id",
        "description": "Retrieve information about a specific POS transaction",
        "operationId": "get-pos-transaction-by-id",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "The POS transaction id",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"transaction\": {\n      \"id\": \"18807087-a926-4e80-8758-296e88e7dbbd\",\n      \"reference\": \"20240111F041\",\n      \"amount\": \"22000.00\",\n      \"stampDuty\": \"0.00\",\n      \"fee\": \"100.00\",\n      \"settlementAmount\": \"21900.00\",\n      \"type\": \"card-payment\",\n      \"status\": \"successful\",\n      \"datetime\": \"2024-01-11T09:09:44.000Z\",\n      \"message\": \"Successful\",\n      \"cardPayment\": {\n      \"pan\": \"527183******2759\",\n      \"stan\": \"225561\",\n      \"rrn\": \"000001225561\",\n      \"responseCode\": \"00\",\n      \"responseMessage\": \"Successful\"\n      },\n      \"transfer\": null,\n      \"terminal\": {\n          \"id\": \"5bb9faa9-9176-4f08-8768-fc146944de74\",\n          \"name\": \"Lenco Bakeries\",\n          \"address\": null,\n          \"phone\": null,\n          \"serialNumber\": \"P260300146913\",\n          \"model\": \"MP35P\",\n          \"assignedAt\": \"2024-01-01T12:10:01.000Z\",\n          \"settlementAccountId\": \"868c2b6f-167d-480b-9bba-c782c40e3d73\",\n          \"accountDetails\": {\n            \"accountName\": \"Lenco Bakeries\",\n            \"accountNumber\": \"9900000006\",\n            \"bankName\": \"Providus Bank\"\n          },\n          \"status\": \"unassigned\",\n          \"unassignedAt\": null\n        },\n      \"settlementStatus\": \"successful\"\n    }\n  }\n}"
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
                        "transaction": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string",
                              "example": "18807087-a926-4e80-8758-296e88e7dbbd"
                            },
                            "reference": {
                              "type": "string",
                              "example": "20240111F041"
                            },
                            "amount": {
                              "type": "string",
                              "example": "22000.00"
                            },
                            "stampDuty": {
                              "type": "string",
                              "example": "0.00"
                            },
                            "fee": {
                              "type": "string",
                              "example": "100.00"
                            },
                            "settlementAmount": {
                              "type": "string",
                              "example": "21900.00"
                            },
                            "type": {
                              "type": "string",
                              "example": "card-payment"
                            },
                            "status": {
                              "type": "string",
                              "example": "successful"
                            },
                            "datetime": {
                              "type": "string",
                              "example": "2024-01-11T09:09:44.000Z"
                            },
                            "message": {
                              "type": "string",
                              "example": "Successful"
                            },
                            "cardPayment": {
                              "type": "object",
                              "properties": {
                                "pan": {
                                  "type": "string",
                                  "example": "527183******2759"
                                },
                                "stan": {
                                  "type": "string",
                                  "example": "225561"
                                },
                                "rrn": {
                                  "type": "string",
                                  "example": "000001225561"
                                },
                                "responseCode": {
                                  "type": "string",
                                  "example": "00"
                                },
                                "responseMessage": {
                                  "type": "string",
                                  "example": "Successful"
                                }
                              }
                            },
                            "transfer": {},
                            "terminal": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "example": "5bb9faa9-9176-4f08-8768-fc146944de74"
                                },
                                "name": {
                                  "type": "string",
                                  "example": "Lenco Bakeries"
                                },
                                "address": {},
                                "phone": {},
                                "serialNumber": {
                                  "type": "string",
                                  "example": "P260300146913"
                                },
                                "model": {
                                  "type": "string",
                                  "example": "MP35P"
                                },
                                "assignedAt": {
                                  "type": "string",
                                  "example": "2024-01-01T12:10:01.000Z"
                                },
                                "settlementAccountId": {
                                  "type": "string",
                                  "example": "868c2b6f-167d-480b-9bba-c782c40e3d73"
                                },
                                "accountDetails": {
                                  "type": "object",
                                  "properties": {
                                    "accountName": {
                                      "type": "string",
                                      "example": "Lenco Bakeries"
                                    },
                                    "accountNumber": {
                                      "type": "string",
                                      "example": "9900000006"
                                    },
                                    "bankName": {
                                      "type": "string",
                                      "example": "Providus Bank"
                                    }
                                  }
                                },
                                "status": {
                                  "type": "string",
                                  "example": "unassigned"
                                },
                                "unassignedAt": {}
                              }
                            },
                            "settlementStatus": {
                              "type": "string",
                              "example": "successful"
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
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "6063101eb8d5d7003e8aa44d:66f139a0de33d100115f5d09"
}
```
