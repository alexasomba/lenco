Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /recipients

Retrieve information about all your recipients

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"name\": string,\n \"currency\": string,\n \"bankAccount\": {\n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n },\n \"meta\": {\n \"total\": number,\n \"pageCount\": number,\n \"perPage\": number,\n \"currentPage\": number,\n }\n }\n}",
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
    "/recipients": {
      "get": {
        "summary": "/recipients",
        "description": "Retrieve information about all your recipients",
        "operationId": "get-recipients",
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
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"recipients\": [\n            {\n                \"id\": \"8a14276b-9d69-456a-8d22-5c7575fc84d3\",\n                \"name\": \"OgaVenue Limited\",\n                \"currency\": \"NGN\",\n                \"bankAccount\": {\n                    \"accountName\": \"OgaVenue Limited\",\n                    \"accountNumber\": \"0000000073\",\n                    \"bank\": {\n                        \"code\": \"000023\",\n                        \"name\": \"PROVIDUS BANK\"\n                    }\n                }\n            },\n            {\n                \"id\": \"056ffebf-812a-433a-83a0-9c67cd8c089c\",\n                \"name\": \"OGAVENUE- DISBURSEMENT 2\",\n                \"currency\": \"NGN\",\n                \"bankAccount\": {\n                    \"accountName\": \"OGAVENUE- DISBURSEMENT 2\",\n                    \"accountNumber\": \"0000000076\",\n                    \"bank\": {\n                        \"code\": \"000023\",\n                        \"name\": \"PROVIDUS BANK\"\n                    }\n                }\n            },\n            {\n                \"id\": \"cdfc21ce-7424-4b71-bbc8-321c82b309fc\",\n                \"name\": \"OGAVENUE- DISBURSEMENT 1\",\n                \"currency\": \"NGN\",\n                \"bankAccount\": {\n                    \"accountName\": \"OGAVENUE- DISBURSEMENT 1\",\n                    \"accountNumber\": \"0000000077\",\n                    \"bank\": {\n                        \"code\": \"000023\",\n                        \"name\": \"PROVIDUS BANK\"\n                    }\n                }\n            },\n            {\n                \"id\": \"bcb64336-637e-4bb6-9f7e-0bb0c0358516\",\n                \"name\": \"Gstuntz Technology\",\n                \"currency\": \"NGN\",\n                \"bankAccount\": {\n                    \"accountName\": \"Gstuntz Technology\",\n                    \"accountNumber\": \"0000000052\",\n                    \"bank\": {\n                        \"code\": \"000023\",\n                        \"name\": \"PROVIDUS BANK\"\n                    }\n                }\n            },\n            {\n                \"id\": \"fa916f4d-e1dd-4b56-9ce8-6e2a4bbd42d5\",\n                \"name\": \"Shalewa Elizabeth\",\n                \"currency\": \"NGN\",\n                \"bankAccount\": {\n                    \"accountName\": \"Shalewa Elizabeth\",\n                    \"accountNumber\": \"8144374977\",\n                    \"bank\": {\n                        \"code\": \"000014\",\n                        \"name\": \"ACCESS BANK\"\n                    }\n                }\n            },\n        ],\n        \"meta\": {\n            \"total\": 5,\n            \"pageCount\": 1,\n            \"perPage\": 100,\n            \"currentPage\": 1\n        }\n    }\n}"
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
  "_id": "60633ad0d7e9d4000f4916b9:6063418288a90b004f631008"
}
```
