Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts/all-transactions

Get all successful and rejected transactions that occurred on your virtual accounts

Response Schema:

```json
{
  "status": boolean,
  "message": string,
  "data": {
    "allTransactions": [
      {
        "type": "virtual-account.transaction" | "virtual-account.rejected-transaction",
        "id": string,
        "transactionAmount": string,
        "fee": string | null,
        "stampDuty": string,
        "settlementAmount": string | null,
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
        "settlementAccountId": string | null,
        "datetime": date-time,
        "nipSessionId": string | null,
        "transactionReference": string | null,
        "settlementStatus": "pending" | "settled" | null,
        "reasonForRejection": {
          "code": string,
          "message": string
        } | null
      }
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
    "/virtual-accounts/all-transactions": {
      "get": {
        "summary": "/virtual-accounts/all-transactions",
        "description": "Get all successful and rejected transactions that occurred on your virtual accounts",
        "operationId": "get-all-virtual-account-transactions",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Specify exactly what page you want to retrieve. If not specified we use a default value of 1.",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "start",
            "in": "query",
            "description": "Earliest date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end",
            "in": "query",
            "description": "Latest date to filter for. Format: YYYY-MM-DD",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "accountReference",
            "in": "query",
            "description": "Get all transactions for a single virtual account using it's account reference",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "transactionReference",
            "in": "query",
            "description": "Get all transactions for a single virtual account using the `transactionReference` that was passed when creating the account.",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"allTransactions\": [\n      {\n        \"type\": \"virtual-account.transaction\",\n        \"id\": \"2bbaa312-8bd6-4cab-92fd-b4dd25b96e7e\",\n        \"transactionAmount\": \"110.00\",\n        \"fee\": \"1.65\",\n        \"stampDuty\": \"0.00\",\n        \"settlementAmount\": \"108.35\",\n        \"currency\": \"NGN\",\n        \"narration\": \"VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009\",\n        \"details\": {\n          \"accountName\": \"OGAVENUE- ACCOUNT A\",\n          \"accountNumber\": \"0000000069\",\n          \"bank\": {\n            \"name\": \"Providus Bank\",\n            \"code\": \"000023\"\n          }\n        },\n        \"virtualAccount\": {\n          \"id\": \"d0ca79a4-92a7-45f2-b9eb-57c10584bb88\",\n          \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n          \"bankAccount\": {\n            \"accountName\": \"LENCO(Andre Ali)\",\n            \"accountNumber\": \"9999000048\",\n            \"bank\": {\n              \"code\": \"000023\",\n              \"name\": \"PROVIDUS BANK\"\n            }\n          },\n          \"type\": \"Static Virtual Account\",\n          \"status\": \"active\",\n          \"createdAt\": \"2021-11-02T17:16:56.424Z\",\n          \"expiresAt\": null,\n          \"currency\": \"NGN\",\n          \"meta\": {\n            \"isStatic\": true,\n            \"bvn\": \"22202******\",\n            \"transactionReference\": null,\n            \"amount\": null,\n            \"minAmount\": null\n          }\n        },\n        \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n        \"settlementAccountId\": \"3ec7dbca-7bf3-486f-9e08-958d0e8e885d\",\n        \"datetime\": \"2021-11-02T19:10:20.000Z\",\n        \"nipSessionId\": \"211102000000000000000000000009\",\n        \"transactionReference\": null,\n        \"settlementStatus\": \"settled\",\n        \"reasonForRejection\": null\n      },\n      {\n        \"type\": \"virtual-account.rejected-transaction\",\n        \"id\": \"2bbaa312-8bd6-4cab-92fd-b4dd25b96e7f\",\n        \"transactionAmount\": \"110.00\",\n        \"fee\": null,\n        \"stampDuty\": \"0.00\",\n        \"settlementAmount\": null,\n        \"currency\": \"NGN\",\n        \"narration\": \"VPS TRANSFERS From OGAVENUE- ACCOUNT A / A1 / Lenco 717a8275aa/211102000000000000000000000009\",\n        \"details\": {\n          \"accountName\": \"OGAVENUE- ACCOUNT A\",\n          \"accountNumber\": \"0000000069\",\n          \"bank\": {\n            \"name\": \"Providus Bank\",\n            \"code\": \"000023\"\n          }\n        },\n        \"virtualAccount\": {\n          \"id\": \"d0ca79a4-92a7-45f2-b9eb-57c10584bb88\",\n          \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n          \"bankAccount\": {\n            \"accountName\": \"LENCO(Andre Ali)\",\n            \"accountNumber\": \"9999000048\",\n            \"bank\": {\n              \"code\": \"000023\",\n              \"name\": \"PROVIDUS BANK\"\n            }\n          },\n          \"type\": \"Static Virtual Account\",\n          \"status\": \"active\",\n          \"createdAt\": \"2021-11-02T17:16:56.424Z\",\n          \"expiresAt\": null,\n          \"currency\": \"NGN\",\n          \"meta\": {\n            \"isStatic\": true,\n            \"bvn\": \"22202******\",\n            \"transactionReference\": null,\n            \"amount\": null,\n            \"minAmount\": null\n          }\n        },\n        \"accountReference\": \"3feff5b6-c772-4038-b265-09a77190d07f\",\n        \"settlementAccountId\": null,\n        \"datetime\": \"2021-11-02T19:10:20.000Z\",\n        \"nipSessionId\": \"211102000000000000000000000009\",\n        \"transactionReference\": null,\n        \"settlementStatus\": null,\n        \"reasonForRejection\": {\n          \"code\": \"11\",\n          \"message\": \"Duplicate payment\"\n        }\n      }\n    ],\n    \"meta\": {\n      \"total\": 2,\n      \"pageCount\": 1,\n      \"perPage\": 100,\n      \"currentPage\": 1,\n    }\n  }\n}"
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
  "_id": "60633ad0d7e9d4000f4916b9:68e4166b89c259cffde53227"
}
```
