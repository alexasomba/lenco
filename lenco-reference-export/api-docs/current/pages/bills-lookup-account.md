Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /bills/lookup-account

Verify / lookup customer account details for cable-tv and electricity

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": true,\n \"message\": \"\",\n \"data\": {\n \"customerId\": string,\n \"customerName\": string\n }\n}",
"language": "json"
}
]
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
    "/bills/lookup-account": {
      "get": {
        "summary": "/bills/lookup-account",
        "description": "Verify / lookup customer account details for cable-tv and electricity",
        "operationId": "bills-lookup-account",
        "parameters": [
          {
            "name": "productId",
            "in": "query",
            "description": "The ID of the product the customer wants to pay for. You must provide either the productId or the vendorId.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "vendorId",
            "in": "query",
            "description": "The ID of the vendor that provides the product the customer wants to pay for. You must provide either the productId or the vendorId.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "customerId",
            "in": "query",
            "description": "This is the customer identifier for the bill payment e.g. for airtime, the identifier would be the customer's mobile number.",
            "required": true,
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"customerId\": \"1002030431\",\n        \"customerName\": \"Ifunanya David\"\n    }\n}"
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
                        "customerId": {
                          "type": "string",
                          "example": "1002030431"
                        },
                        "customerName": {
                          "type": "string",
                          "example": "Ifunanya David"
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
  "_id": "60633ad0d7e9d4000f4916b9:62a88935fb78d0003da8f512"
}
```
