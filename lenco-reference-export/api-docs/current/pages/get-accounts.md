Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /accounts

Retrieve information about your bank accounts

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": [\n {\n \"id\": string,\n \"name\": string,\n \"bankAccount\": {\n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n },\n \"type\": string,\n \"status\": \"active\" | \"deleted\",\n \"availableBalance\": string,\n \"currentBalance\": string,\n \"createdAt\": date-time,\n \"currency\": string\n }\n ]\n}",
"language": "json"
}
]
}
[/block]

[block:callout]
{
"type": "info",
"body": "All date-time fields are expressed in ISO8601 UTC times.",
"title": "date-time"
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
    "/accounts": {
      "get": {
        "summary": "/accounts",
        "description": "Retrieve information about your bank accounts",
        "operationId": "get-accounts",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": [\n        {\n            \"id\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n            \"name\": \"OGAVENUE- DISBURSEMENT 2\",\n            \"currency\": \"NGN\",\n            \"bankAccount\": {\n                \"accountName\": \"OGAVENUE- DISBURSEMENT 2\",\n                \"accountNumber\": \"0000000076\",\n                \"bank\": {\n                    \"code\": \"000023\",\n                    \"name\": \"PROVIDUS BANK\"\n                }\n            },\n            \"type\": \"Lenco Current\",\n            \"status\": \"active\",\n            \"availableBalance\": \"0.00\",\n            \"currentBalance\": \"0.00\",\n            \"createdAt\": \"2021-03-30T13:30:58.171Z\"\n        },\n        {\n            \"id\": \"cdfc21ce-7424-4b71-bbc8-321c82b309fc\",\n            \"name\": \"OGAVENUE- DISBURSEMENT 1\",\n            \"currency\": \"NGN\",\n            \"bankAccount\": {\n                \"accountName\": \"OGAVENUE- DISBURSEMENT 1\",\n                \"accountNumber\": \"0000000077\",\n                \"bank\": {\n                    \"code\": \"000023\",\n                    \"name\": \"PROVIDUS BANK\"\n                }\n            },\n            \"type\": \"Lenco Current\",\n            \"status\": \"active\",\n            \"availableBalance\": \"99995404316.07\",\n            \"currentBalance\": \"99995404316.07\",\n            \"createdAt\": \"2021-03-30T13:30:58.218Z\"\n        }\n    ]\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "example": "056ffebf-812a-433a-83a0-9c67cd8c089c"
                          },
                          "name": {
                            "type": "string",
                            "example": "OGAVENUE- DISBURSEMENT 2"
                          },
                          "currency": {
                            "type": "string",
                            "example": "NGN"
                          },
                          "bankAccount": {
                            "type": "object",
                            "properties": {
                              "accountName": {
                                "type": "string",
                                "example": "OGAVENUE- DISBURSEMENT 2"
                              },
                              "accountNumber": {
                                "type": "string",
                                "example": "0000000076"
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
                            "example": "Lenco Current"
                          },
                          "status": {
                            "type": "string",
                            "example": "active"
                          },
                          "availableBalance": {
                            "type": "string",
                            "example": "0.00"
                          },
                          "currentBalance": {
                            "type": "string",
                            "example": "0.00"
                          },
                          "createdAt": {
                            "type": "string",
                            "example": "2021-03-30T13:30:58.171Z"
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
  "_id": "60633ad0d7e9d4000f4916b9:60632758dcdd0b007a0db8c4"
}
```
