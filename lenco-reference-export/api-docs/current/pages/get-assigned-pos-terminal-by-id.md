Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/terminals/:id

Get details of an assigned POS terminal

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": {
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
    "stats": {
      "total": {
        "value": string | null,
        "count": number | null
      },
      "successful": {
        "value": string | null,
        "count": number | null
      }
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
    "/point-of-sale/terminals/{id}": {
      "get": {
        "summary": "/point-of-sale/terminals/:id",
        "description": "Get details of an assigned POS terminal",
        "operationId": "get-assigned-pos-terminal-by-id",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "The assigned POS terminal id",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"terminal\": {\n      \"id\": \"5bb9faa9-9176-4f08-8768-fc146944de74\",\n      \"name\": \"Lenco Bakeries\",\n      \"address\": null,\n      \"phone\": null,\n      \"serialNumber\": \"P260300146913\",\n      \"model\": \"MP35P\",\n      \"assignedAt\": \"2024-01-01T12:10:01.000Z\",\n      \"settlementAccountId\": \"868c2b6f-167d-480b-9bba-c782c40e3d73\",\n      \"accountDetails\": {\n        \"accountName\": \"Lenco Bakeries\",\n        \"accountNumber\": \"9900000006\",\n        \"bankName\": \"Providus Bank\"\n      },\n      \"status\": \"unassigned\",\n      \"unassignedAt\": null\n    },\n    \"stats\": {\n      \"total\": {\n        \"value\": \"23000.00\",\n        \"count\": 2\n      },\n      \"successful\": {\n        \"value\": \"23000.00\",\n        \"count\": 2\n      }\n    }\n  }\n}"
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
                        "stats": {
                          "type": "object",
                          "properties": {
                            "total": {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "example": "23000.00"
                                },
                                "count": {
                                  "type": "integer",
                                  "example": 2,
                                  "default": 0
                                }
                              }
                            },
                            "successful": {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "type": "string",
                                  "example": "23000.00"
                                },
                                "count": {
                                  "type": "integer",
                                  "example": 2,
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
  "_id": "6063101eb8d5d7003e8aa44d:66f139457274430011e649a7"
}
```
