Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /recipients

Create a new recipient

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"name\": string,\n \"currency\": string,\n \"bankAccount\": {\n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n }\n }\n}",
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
      "post": {
        "summary": "/recipients",
        "description": "Create a new recipient",
        "operationId": "create-recipient",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["accountNumber", "bankCode"],
                "properties": {
                  "accountNumber": {
                    "type": "string",
                    "description": "10 digit nuban"
                  },
                  "bankCode": {
                    "type": "string"
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": \"fa916f4d-e1dd-4b56-9ce8-6e2a4bbd42d5\",\n        \"name\": \"Shalewa Elizabeth\",\n        \"currency\": \"NGN\",\n        \"bankAccount\": {\n            \"accountName\": \"Shalewa Elizabeth\",\n            \"accountNumber\": \"8144374977\",\n            \"bank\": {\n                \"code\": \"000014\",\n                \"name\": \"ACCESS BANK\"\n            }\n        }\n    }\n}"
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
                        "id": {
                          "type": "string",
                          "example": "fa916f4d-e1dd-4b56-9ce8-6e2a4bbd42d5"
                        },
                        "name": {
                          "type": "string",
                          "example": "Shalewa Elizabeth"
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
  "_id": "60633ad0d7e9d4000f4916b9:606347219abe0c0056560627"
}
```
