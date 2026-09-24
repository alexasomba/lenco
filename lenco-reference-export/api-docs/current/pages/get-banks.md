Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /banks

Get list of banks and financial institutions

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": [\n {\n \"code\": string,\n \"name\": string,\n }\n ]\n}",
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
    "/banks": {
      "get": {
        "summary": "/banks",
        "description": "Get list of banks and financial institutions",
        "operationId": "get-banks",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": [\n        {\n            \"code\": \"120001\",\n            \"name\": \"9 PAYMENT SOLUTIONS BANK\"\n        },\n        {\n            \"code\": \"090270\",\n            \"name\": \"AB MICROFINANCE BANK\"\n        },\n        {\n            \"code\": \"000014\",\n            \"name\": \"ACCESS BANK\"\n        },\n        {\n            \"code\": \"000005\",\n            \"name\": \"ACCESS(DIAMOND) BANK\"\n        },\n        {\n            \"code\": \"000018\",\n            \"name\": \"UNION BANK\"\n        },\n        {\n            \"code\": \"000004\",\n            \"name\": \"UNITED BANK FOR AFRICA\"\n        },\n        {\n            \"code\": \"000011\",\n            \"name\": \"UNITY BANK\"\n        },\n        {\n            \"code\": \"000015\",\n            \"name\": \"ZENITH BANK\"\n        },\n    ]\n}"
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
  "_id": "60633ad0d7e9d4000f4916b9:60635f4403af2800440c8c42"
}
```
