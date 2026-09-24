Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /point-of-sale/transactions/webhook/repush

Repush the webhook notification for a POS transaction

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": null
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
    "/point-of-sale/transactions/webhook/repush": {
      "post": {
        "summary": "/point-of-sale/transactions/webhook/repush",
        "description": "Repush the webhook notification for a POS transaction",
        "operationId": "repush-pos-transaction-webhook",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Optional. Provide either the POS transaction `id` or the `reference`"
                  },
                  "reference": {
                    "type": "string",
                    "description": "Optional. Provide either the POS transaction `id` or the `reference`"
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": null\n}"
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
                    "data": {}
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
  "_id": "6063101eb8d5d7003e8aa44d:66f139cbb5d19c005d7dc388"
}
```
