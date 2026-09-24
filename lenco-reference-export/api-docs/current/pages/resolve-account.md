Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /resolve

Verify/resolve account details

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n }\n}",
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
    "/resolve": {
      "get": {
        "summary": "/resolve",
        "description": "Verify/resolve account details",
        "operationId": "resolve-account",
        "parameters": [
          {
            "name": "accountNumber",
            "in": "query",
            "description": "10 digit nuban",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "bankCode",
            "in": "query",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"accountName\": \"Shalewa Elizabeth\",\n        \"accountNumber\": \"8144374977\",\n        \"bank\": {\n            \"code\": \"000014\",\n            \"name\": \"ACCESS BANK\"\n        }\n    }\n}"
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
                      "type": "object",
                      "properties": {
                        "accountName": {
                          "type": "string",
                          "example": "Shalewa Elizabeth"
                        },
                        "accountNumber": {
                          "type": "string",
                          "example": "8144374977"
                        },
                        "bank": {
                          "type": "object",
                          "properties": {
                            "code": {
                              "type": "string",
                              "example": "000014"
                            },
                            "name": {
                              "type": "string",
                              "example": "ACCESS BANK"
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
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": false,\n    \"message\": \"Account Details could not be verified\",\n    \"data\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "message": {
                      "type": "string",
                      "example": "Account Details could not be verified"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {}
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
  "_id": "60633ad0d7e9d4000f4916b9:60636031c62410002d5d22a4"
}
```
