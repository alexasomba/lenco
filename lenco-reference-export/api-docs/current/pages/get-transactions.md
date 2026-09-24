Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transactions

Get transactions that occurred on your bank accounts

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
      	"transactions": [
          {
              "id": string,
              "amount": string,
              "fee": string,
              "narration": string,
              "type": "credit" | "debit",
              "initiatedAt": date-time | null,
              "completedAt": date-time | null,
              "accountId": string,
              "details": {
                  "accountName": string,
                  "accountNumber": string,
                  "bank": {
                      "code": string,
                      "name": string,
                  }
              } | null,
              "status": "pending" | "successful" | "failed" | "declined",
              "failedAt": date-time | null,
              "reasonForFailure": string | null,
              "clientReference": string | null,
              "transactionReference": string,
              "nipSessionId": string | null
          },
        ],
        "meta": {
            "total": number,
            "pageCount": number,
            "perPage": number,
            "currentPage": number,
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
    "/transactions": {
      "get": {
        "summary": "/transactions",
        "description": "Get transactions that occurred on your bank accounts",
        "operationId": "get-transactions",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Specify exactly what page you want to retrieve. If not specify we use a default value of 1.",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "status",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": ["pending", "successful", "failed", "declined"]
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "If \"transfer\" is used, this will return only bank transfer debit transactions",
            "schema": {
              "type": "string",
              "enum": ["credit", "debit", "transfer"]
            }
          },
          {
            "name": "start",
            "in": "query",
            "description": "Earliest initiatedAt or completedAt date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end",
            "in": "query",
            "description": "Latest initiatedAt or completedAt date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "search",
            "in": "query",
            "description": "Search term to look for.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "accountIds",
            "in": "query",
            "description": "Your 36-character account uuid to filter transactions.",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"transactions\": [\n            {\n                \"id\": \"46ce8b2d-457c-4d0f-a3bb-5fbfd0a230fa\",\n                \"amount\": \"2000.00\",\n                \"fee\": \"0.00\",\n                \"narration\": \"Lenco / Testing api payment\",\n                \"type\": \"debit\",\n                \"initiatedAt\": null,\n                \"completedAt\": null,\n                \"accountId\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n                \"details\": {\n                    \"accountName\": \"Shalewa Elizabeth\",\n                    \"accountNumber\": \"8144374977\",\n                    \"bank\": {\n                        \"code\": \"000014\",\n                        \"name\": \"ACCESS BANK\"\n                    }\n                },\n                \"status\": \"failed\",\n                \"failedAt\": \"2021-03-30T14:34:52.000Z\",\n                \"reasonForFailure\": \"Insufficient funds in your account\",\n                \"clientReference\": \"reference-test-1\",\n                \"transactionReference\": \"276fc62654\",\n              \t\"nipSessionId\": \"000000000000000000134034230445\"\n            },\n            {\n                \"id\": \"39ab8f3a-a9ae-4ccd-8987-c596b3a100d9\",\n                \"amount\": \"5000.00\",\n                \"fee\": \"0.00\",\n                \"narration\": \"From OgaVenue Limited / Stuff / Lenco\",\n                \"type\": \"credit\",\n                \"initiatedAt\": null,\n                \"completedAt\": \"2021-03-30T14:12:10.000Z\",\n                \"accountId\": \"cdfc21ce-7424-4b71-bbc8-321c82b309fc\",\n                \"details\": null,\n                \"status\": \"successful\",\n                \"failedAt\": null,\n                \"reasonForFailure\": null,\n                \"clientReference\": null,\n                \"transactionReference\": \"275f6155fd\"\n              \t\"nipSessionId\": null\n            }\n        ],\n        \"meta\": {\n            \"total\": 2,\n            \"pageCount\": 1,\n            \"perPage\": 100,\n            \"currentPage\": 1\n        }\n    }\n}"
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
  "_id": "60633ad0d7e9d4000f4916b9:60638abfa883dc00721ad260"
}
```
