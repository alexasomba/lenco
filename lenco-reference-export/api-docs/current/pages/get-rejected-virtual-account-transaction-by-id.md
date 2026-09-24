Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts/rejected-transactions/:transaction-id

Retrieve information about a specific rejected transaction that occurred on a virtual account

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": {
      "id": string,
      "transactionAmount": string,
      "currency": string,
      "narration": string,
      "details": {
        "accountName": string,
        "accountNumber": string,
        "bank": {
          "name": string,
          "code": string,
        }
      },
      "virtualAccount": {
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
        "type": "Static Virtual Account" | "Dynamic Virtual Account",
        "status": "active" | "expired" | "blacklisted" | "deleted",
        "createdAt": date-time,
        "expiresAt": date-time | null,
        "currency": string,
        "meta": {
          "isStatic": boolean,
          "bvn": string | null,
          "transactionReference": string | null,
          "amount": string | null,
          "minAmount": string | null
        }
      },
      "accountReference": string,
      "datetime": date-time,
      "nipSessionId": string | null,
      "transactionReference": string | null,
      "reasonForRejection": {
        "code": string,
        "message": string
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
    "/virtual-accounts/rejected-transactions/{transaction-id}": {
      "get": {
        "summary": "/virtual-accounts/rejected-transactions/:transaction-id",
        "description": "Retrieve information about a specific rejected transaction that occurred on a virtual account",
        "operationId": "get-rejected-virtual-account-transaction-by-id",
        "parameters": [
          {
            "name": "transaction-id",
            "in": "path",
            "description": "The id of the rejected transaction",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n      \"id\": \"2bbaa312-8bd6-4cab-92fd-b4dd25b96e7f\",\n      \"transactionAmount\": \"110.00\",\n      \"currency\": \"NGN\",\n      \"narration\": \"VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009\",\n      \"details\": {\n        \"accountName\": \"OGAVENUE- ACCOUNT A\",\n        \"accountNumber\": \"0000000069\",\n        \"bank\": {\n          \"name\": \"Providus Bank\",\n          \"code\": \"000023\"\n        }\n      },\n      \"virtualAccount\": {\n        \"id\": \"d0ca79a4-92a7-45f2-b9eb-57c10584bb88\",\n        \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n        \"bankAccount\": {\n          \"accountName\": \"LENCO(Andre Ali)\",\n          \"accountNumber\": \"9999000048\",\n          \"bank\": {\n            \"code\": \"000023\",\n            \"name\": \"PROVIDUS BANK\"\n          }\n        },\n        \"type\": \"Static Virtual Account\",\n        \"status\": \"active\",\n        \"createdAt\": \"2021-11-02T17:16:56.424Z\",\n        \"expiresAt\": null,\n        \"currency\": \"NGN\",\n        \"meta\": {\n          \"isStatic\": true,\n          \"bvn\": \"22202******\",\n          \"transactionReference\": null,\n          \"amount\": null,\n          \"minAmount\": null\n        }\n      },\n      \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n      \"datetime\": \"2021-11-02T19:10:20.000Z\",\n      \"nipSessionId\": \"211102000000000000000000000009\",\n      \"transactionReference\": null,\n      \"reasonForRejection\": {\n        \"code\": \"11\",\n        \"message\": \"Duplicate payment\"\n      }\n    }\n  }\n}"
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
  "_id": "60633ad0d7e9d4000f4916b9:68e416c7d0b9acb81fe53b49"
}
```
