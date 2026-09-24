Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /bills/products

Get the list of vendors for bill payments.
You can filter this list by the bill payment category.

[block:callout]
{
"type": "info",
"body": "category is either `airtime`, `mobile-data`, `cable-tv`, or `electricity`."
}
[/block]

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"products\": [\n {\n \"id\": string,\n \"name\": string,\n \"vendor\": {\n \"id\": string,\n \"name\": string,\n },\n \"amount\": {\n \"type\": \"fixed\" | \"range\",\n \"fixed\": string | null,\n \"minimum\": string | null,\n \"maximum\": string | null,\n },\n \"customerIdLabel\": string,\n \"category\": \"airtime\" | \"mobile-data\" | \"cable-tv\" | \"electricity\",\n \"commissionPercentage\": string,\n }\n ]\n }\n}",
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
    "/bills/products": {
      "get": {
        "summary": "/bills/products",
        "description": "Get the list of vendors for bill payments.\nYou can filter this list by the bill payment category.",
        "operationId": "bills-products",
        "parameters": [
          {
            "name": "categories[]",
            "in": "query",
            "description": "Optional. e.g. ?categories[]=airtime&categories[]=mobile-data",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "vendorIds[]",
            "in": "query",
            "description": "Optional. e.g. ?vendorIds[]=vendorId1&vendorIds[]=vendorId2",
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"products\": [\n            {\n                \"id\": \"b0b5f412-0a76-4dd8-b070-a62764d519bd\",\n                \"name\": \"Airtime Topup\",\n                \"vendor\": {\n                    \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n                    \"name\": \"MTN\"\n                },\n                \"amount\": {\n                    \"type\": \"range\",\n                    \"fixed\": null,\n                    \"minimum\": \"5.00\",\n                    \"maximum\": \"50000.00\"\n                },\n                \"category\": \"airtime\",\n                \"customerIdLabel\": \"Mobile Number\",\n                \"commissionPercentage\": \"2.50\"\n            },\n            {\n                \"id\": \"f1e2c8c6-722d-4009-aff0-f6d36334c7ab\",\n                \"name\": \"Data 100MB - 24 Hours\",\n                \"vendor\": {\n                    \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n                    \"name\": \"MTN\"\n                },\n                \"amount\": {\n                    \"type\": \"fixed\",\n                    \"fixed\": \"100.00\",\n                    \"minimum\": null,\n                    \"maximum\": null\n                },\n                \"category\": \"mobile-data\",\n                \"customerIdLabel\": \"Mobile Number\",\n                \"commissionPercentage\": \"2.50\"\n            }\n        ]\n    }\n}"
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
                        "products": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string",
                                "example": "b0b5f412-0a76-4dd8-b070-a62764d519bd"
                              },
                              "name": {
                                "type": "string",
                                "example": "Airtime Topup"
                              },
                              "vendor": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string",
                                    "example": "70284a19-560d-430d-b1ef-a16fe9107d1f"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "MTN"
                                  }
                                }
                              },
                              "amount": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "range"
                                  },
                                  "fixed": {},
                                  "minimum": {
                                    "type": "string",
                                    "example": "5.00"
                                  },
                                  "maximum": {
                                    "type": "string",
                                    "example": "50000.00"
                                  }
                                }
                              },
                              "category": {
                                "type": "string",
                                "example": "airtime"
                              },
                              "customerIdLabel": {
                                "type": "string",
                                "example": "Mobile Number"
                              },
                              "commissionPercentage": {
                                "type": "string",
                                "example": "2.50"
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
  "_id": "60633ad0d7e9d4000f4916b9:62a884e7a40c6f00adf2d35d"
}
```
