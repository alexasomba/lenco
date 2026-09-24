Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/terminals

Retrieve information about your assigned POS terminals

Response Schema:

<br />

```json
{
  "status": boolean,
  "message": string,
  "data": {
    "terminals": [
      {
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
      }
    ],
    "meta": {
      "total": number,
      "pageCount": number,
      "perPage": number,
      "currentPage": number
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
    "/point-of-sale/terminals": {
      "get": {
        "summary": "/point-of-sale/terminals",
        "description": "Retrieve information about your assigned POS terminals",
        "operationId": "get-assigned-pos-terminals",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Optional. Default: 1",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "serialNumber",
            "in": "query",
            "description": "Optional. The POS terminal serial number",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"terminals\": [\n      {\n        \"id\": \"5bb9faa9-9176-4f08-8768-fc146944de74\",\n        \"name\": \"Lenco Bakeries\",\n        \"address\": null,\n        \"phone\": null,\n        \"serialNumber\": \"P260300146913\",\n        \"model\": \"MP35P\",\n        \"assignedAt\": \"2024-01-01T12:10:01.000Z\",\n        \"settlementAccountId\": \"868c2b6f-167d-480b-9bba-c782c40e3d73\",\n        \"accountDetails\": {\n          \"accountName\": \"Lenco Bakeries\",\n          \"accountNumber\": \"9900000006\",\n          \"bankName\": \"Providus Bank\"\n        },\n        \"status\": \"unassigned\",\n        \"unassignedAt\": null\n      }\n    ],\n    \"meta\": {\n      \"total\": 1,\n      \"pageCount\": 1,\n      \"perPage\": 100,\n      \"currentPage\": 1\n    }\n  }\n}"
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
                        "terminals": {
                          "type": "array",
                          "items": {
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
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true,
  "_id": "6063101eb8d5d7003e8aa44d:66f138e7e7ab7d0019e45f90"
}
```
