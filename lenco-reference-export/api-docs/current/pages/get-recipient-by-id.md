Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /recipient/:id

Retrieve information about a specific recipient

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
    "/recipient/id": {
      "get": {
        "summary": "/recipient/:id",
        "description": "Retrieve information about a specific recipient",
        "operationId": "get-recipient-by-id",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Your 36-character recipient uuid.",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"id\": \"8a14276b-9d69-456a-8d22-5c7575fc84d3\",\n        \"name\": \"OgaVenue Limited\",\n        \"currency\": \"NGN\",\n        \"bankAccount\": {\n            \"accountName\": \"OgaVenue Limited\",\n            \"accountNumber\": \"0000000073\",\n            \"bank\": {\n                \"code\": \"000023\",\n                \"name\": \"PROVIDUS BANK\"\n            }\n        }\n    }\n}"
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
                          "example": "8a14276b-9d69-456a-8d22-5c7575fc84d3"
                        },
                        "name": {
                          "type": "string",
                          "example": "OgaVenue Limited"
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
                              "example": "OgaVenue Limited"
                            },
                            "accountNumber": {
                              "type": "string",
                              "example": "0000000073"
                            },
                            "bank": {
                              "type": "object",
                              "properties": {
                                "code": {
                                  "type": "string",
                                  "example": "000023"
                                },
                                "name": {
                                  "type": "string",
                                  "example": "PROVIDUS BANK"
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
                    "value": "{\n    \"status\": false,\n    \"message\": \"Recipient was not found\",\n    \"data\": []\n}"
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
                      "example": "Recipient was not found"
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
  "_id": "60633ad0d7e9d4000f4916b9:606341b26e7131001012ecd2"
}
```
