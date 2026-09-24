Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/terminals/assign

Assign a POS terminal

Response Schema:

```json
{
  "status": true,
  "message": "",
  "data": {
    "terminal": {
      "id": "5bb9faa9-9176-4f08-8768-fc146944de74",
      "name": "Lenco Bakeries",
      "address": null,
      "phone": null,
      "serialNumber": "P260300146913",
      "model": "MP35P",
      "assignedAt": "2024-01-01T12:10:01.000Z",
      "settlementAccountId": "868c2b6f-167d-480b-9bba-c782c40e3d73",
      "accountDetails": {
        "accountName": "Lenco Bakeries",
        "accountNumber": "9900000006",
        "bankName": "Providus Bank"
      },
      "status": "assigned",
      "unassignedAt": null
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
    "/point-of-sale/terminals/assign": {
      "post": {
        "summary": "/point-of-sale/terminals/assign",
        "description": "Assign a POS terminal",
        "operationId": "assign-pos-terminal",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["serialNumber", "name"],
                "properties": {
                  "serialNumber": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "address": {
                    "type": "string",
                    "description": "Optional"
                  },
                  "phone": {
                    "type": "string",
                    "description": "Optional"
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
                    "value": "{\n  \"status\": boolean,\n  \"message\": string,\n  \"data\": {\n    \"terminal\": {\n      \"id\": string,\n      \"name\": string,\n      \"address\": string | null,\n      \"phone\": string | null,\n      \"serialNumber\": string,\n      \"model\": string | null,\n      \"assignedAt\": date-time,\n      \"settlementAccountId\": string | null,\n      \"accountDetails\": {\n        \"accountName\": string,\n        \"accountNumber\": string,\n        \"bankName\": string,\n      } | null,\n      \"status\": \"assigned\" | \"unassigned\",\n      \"unassignedAt\": date-time | null\n    }\n  }\n}"
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
  "_id": "6063101eb8d5d7003e8aa44d:66f13953d67cf2002bc63389"
}
```
