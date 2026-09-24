Fetch the complete documentation index at: https://lenco-api.readme.io/v2.0/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transfer-recipients

Retrieve information about all your transfer recipients

Response schema:

```json
{
    "status": boolean,
    "message": string,
    "data": [
    	{
		    "id": string,
		    "currency": string,
		    "type": string,
		    "country": string,
		    "details": {
		        "type": string,
		        "accountName": string,
		        "accountNumber": string | null,
		        "bank": {
		            "id": string,
		            "name": string,
		            "country": string
		        } | null,
		        "phone": string | null,
		        "operator": string | null,
		        "walletNumber": string | null,
		        "tillNumber": string | null
		    }
		}
    ],
    "meta": {
        "total": number,
        "pageCount": number,
        "perPage": number,
        "currentPage": number
    }
}
```

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Lenco API",
    "version": "2.0"
  },
  "servers": [
    {
      "url": "https://api.lenco.co/access/v2"
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
    "/transfer-recipients": {
      "get": {
        "summary": "/transfer-recipients",
        "description": "Retrieve information about all your transfer recipients",
        "operationId": "get-transfer-recipients",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "If not specified, it defaults to 1",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 1
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "either `mobile-money`, `bank-account`, `lenco-money` or `lenco-merchant`",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "country",
            "in": "query",
            "description": "i.e. ng, zm",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"id\": \"d6b6e00e-bdb6-43a6-a561-85b61496198e\",\n            \"details\": {\n                \"type\": \"mobile-money\",\n                \"accountName\": \"Beata Jean\",\n                \"phone\": \"0750000000\",\n                \"operator\": \"zamtel\"\n            },\n            \"currency\": \"ZMW\",\n            \"type\": \"mobile-money\",\n            \"country\": \"zm\"\n        }\n    ],\n    \"meta\": {\n        \"total\": 1,\n        \"pageCount\": 1,\n        \"perPage\": 100,\n        \"currentPage\": 1\n    }\n}"
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
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "example": "d6b6e00e-bdb6-43a6-a561-85b61496198e"
                          },
                          "details": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "string",
                                "example": "mobile-money"
                              },
                              "accountName": {
                                "type": "string",
                                "example": "Beata Jean"
                              },
                              "phone": {
                                "type": "string",
                                "example": "0750000000"
                              },
                              "operator": {
                                "type": "string",
                                "example": "zamtel"
                              }
                            }
                          },
                          "currency": {
                            "type": "string",
                            "example": "ZMW"
                          },
                          "type": {
                            "type": "string",
                            "example": "mobile-money"
                          },
                          "country": {
                            "type": "string",
                            "example": "zm"
                          }
                        }
                      }
                    },
                    "meta": {
                      "type": "object",
                      "properties": {
                        "total": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "pageCount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "perPage": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "currentPage": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
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
  "_id": "65f06b6583c5de0051b8aa08:65f06b6583c5de0051b8aa10"
}
```
