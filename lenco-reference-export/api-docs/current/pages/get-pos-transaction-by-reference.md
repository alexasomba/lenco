Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/transactions/by-reference/:reference

Retrieve information about a specific POS transaction using the reference

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
    "/point-of-sale/transactions/by-reference/{reference}": {
      "get": {
        "summary": "/point-of-sale/transactions/by-reference/:reference",
        "description": "Retrieve information about a specific POS transaction using the reference",
        "operationId": "get-pos-transaction-by-reference",
        "parameters": [
          {
            "name": "reference",
            "in": "path",
            "description": "The POS transaction reference",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"transaction\": {\n      \"id\": \"e9d0828e-5ae3-4a4a-a8cb-cb1cf986d2e6\",\n      \"reference\": \"20240111CA52\",\n      \"amount\": \"1000.00\",\n      \"stampDuty\": \"0.00\",\n      \"fee\": \"5.00\",\n      \"settlementAmount\": \"995.00\",\n      \"type\": \"transfer\",\n      \"status\": \"successful\",\n      \"datetime\": \"2024-01-11T08:31:23.000Z\",\n      \"message\": \"Successful\",\n      \"cardPayment\": null,\n      \"transfer\": {\n      \"sender\": \"Shalewa Elizabeth\",\n      \"description\": \"From ACCESS/Shalewa Elizabeth/POS purchase/000014240111093122000000001001\",\n      \"sessionId\": \"000014240111093122000000001001\"\n      },\n      \"terminal\": {\n          \"id\": \"5bb9faa9-9176-4f08-8768-fc146944de74\",\n          \"name\": \"Lenco Bakeries\",\n          \"address\": null,\n          \"phone\": null,\n          \"serialNumber\": \"P260300146913\",\n          \"model\": \"MP35P\",\n          \"assignedAt\": \"2024-01-01T12:10:01.000Z\",\n          \"settlementAccountId\": \"868c2b6f-167d-480b-9bba-c782c40e3d73\",\n          \"accountDetails\": {\n            \"accountName\": \"Lenco Bakeries\",\n            \"accountNumber\": \"9900000006\",\n            \"bankName\": \"Providus Bank\"\n          },\n          \"status\": \"unassigned\",\n          \"unassignedAt\": null\n        },\n      \"settlementStatus\": \"successful\"\n    }\n  }\n}"
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
                              "example": "e9d0828e-5ae3-4a4a-a8cb-cb1cf986d2e6"
                            },
                            "reference": {
                              "type": "string",
                              "example": "20240111CA52"
                            },
                            "amount": {
                              "type": "string",
                              "example": "1000.00"
                            },
                            "stampDuty": {
                              "type": "string",
                              "example": "0.00"
                            },
                            "fee": {
                              "type": "string",
                              "example": "5.00"
                            },
                            "settlementAmount": {
                              "type": "string",
                              "example": "995.00"
                            },
                            "type": {
                              "type": "string",
                              "example": "transfer"
                            },
                            "status": {
                              "type": "string",
                              "example": "successful"
                            },
                            "datetime": {
                              "type": "string",
                              "example": "2024-01-11T08:31:23.000Z"
                            },
                            "message": {
                              "type": "string",
                              "example": "Successful"
                            },
                            "cardPayment": {},
                            "transfer": {
                              "type": "object",
                              "properties": {
                                "sender": {
                                  "type": "string",
                                  "example": "Shalewa Elizabeth"
                                },
                                "description": {
                                  "type": "string",
                                  "example": "From ACCESS/Shalewa Elizabeth/POS purchase/000014240111093122000000001001"
                                },
                                "sessionId": {
                                  "type": "string",
                                  "example": "000014240111093122000000001001"
                                }
                              }
                            },
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
  "_id": "6063101eb8d5d7003e8aa44d:66f139b97cbe45003148fd3e"
}
```
