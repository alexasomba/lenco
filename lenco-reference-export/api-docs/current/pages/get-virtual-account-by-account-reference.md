Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts/:account-reference

Get a virtual account details by the account reference - both dynamic and static

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
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
    "/virtual-accounts/{account-reference}": {
      "get": {
        "summary": "/virtual-accounts/:account-reference",
        "description": "Get a virtual account details by the account reference - both dynamic and static",
        "operationId": "get-virtual-account-by-account-reference",
        "parameters": [
          {
            "name": "account-reference",
            "in": "path",
            "description": "The account reference returned when the virtual account number was generated",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"id\": \"41567427-c8ce-4d02-ac2b-d3a5c5e354aa\",\n        \"accountReference\": \"7fc3db51-1f4a-4083-a373-b5363b15b6f2\",\n        \"bankAccount\": {\n            \"accountName\": \"LENCO(Andre Ali)\",\n            \"accountNumber\": \"9999000031\",\n            \"bank\": {\n                \"code\": \"000023\",\n                \"name\": \"PROVIDUS BANK\"\n            }\n        },\n        \"type\": \"Static Virtual Account\",\n        \"status\": \"active\",\n        \"createdAt\": \"2021-11-02T17:14:49.904Z\",\n        \"expiresAt\": null,\n        \"currency\": \"NGN\",\n        \"meta\": {\n            \"isStatic\": true,\n            \"bvn\": \"22202******\",\n            \"transactionReference\": null,\n            \"amount\": null,\n            \"minAmount\": null\n        }\n    }\n}"
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
                          "example": "41567427-c8ce-4d02-ac2b-d3a5c5e354aa"
                        },
                        "accountReference": {
                          "type": "string",
                          "example": "7fc3db51-1f4a-4083-a373-b5363b15b6f2"
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
                              "example": "9999000031"
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
                          "example": "2021-11-02T17:14:49.904Z"
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
  "_id": "60633ad0d7e9d4000f4916b9:6182464f0b64a20071e2126f"
}
```
