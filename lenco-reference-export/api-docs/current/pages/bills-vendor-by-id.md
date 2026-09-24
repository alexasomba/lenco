Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /bills/vendors/:id

Retrieve information about a specific vendor for bill payments

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"name\": string,\n \"products\": [\n {\n \"id\": string,\n \"name\": string,\n \"vendor\": {\n \"id\": string,\n \"name\": string,\n },\n \"amount\": {\n \"type\": \"fixed\" | \"range\",\n \"fixed\": string | null,\n \"minimum\": string | null,\n \"maximum\": string | null,\n },\n \"customerIdLabel\": string,\n \"category\": \"airtime\" | \"mobile-data\" | \"cable-tv\" | \"electricity\",\n \"commissionPercentage\": string,\n }\n ]\n }\n}",
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
    "/bills/vendors/{id}": {
      "get": {
        "summary": "/bills/vendors/:id",
        "description": "Retrieve information about a specific vendor for bill payments",
        "operationId": "bills-vendor-by-id",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of the vendor",
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n    \"name\": \"MTN\",\n    \"products\": [\n      {\n        \"id\": \"b0b5f412-0a76-4dd8-b070-a62764d519bd\",\n        \"name\": \"Airtime Topup\",\n        \"vendor\": {\n          \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n          \"name\": \"MTN\"\n        },\n        \"amount\": {\n          \"type\": \"range\",\n          \"fixed\": null,\n          \"minimum\": \"5.00\",\n          \"maximum\": \"50000.00\"\n        },\n        \"category\": \"airtime\",\n        \"customerIdLabel\": \"Mobile Number\",\n        \"commissionPercentage\": \"2.50\"\n      },\n      {\n        \"id\": \"0a452eb1-2a06-42f4-a7a8-df16e08fda23\",\n        \"name\": \"Data 2GB - 30 Days\",\n        \"vendor\": {\n          \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n          \"name\": \"MTN\"\n        },\n        \"amount\": {\n          \"type\": \"fixed\",\n          \"fixed\": \"1200.00\",\n          \"minimum\": null,\n          \"maximum\": null\n        },\n        \"category\": \"mobile-data\",\n        \"customerIdLabel\": \"Mobile Number\",\n        \"commissionPercentage\": \"2.50\"\n      }\n    ]\n  }\n}"
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
                        "id": {
                          "type": "string",
                          "example": "70284a19-560d-430d-b1ef-a16fe9107d1f"
                        },
                        "name": {
                          "type": "string",
                          "example": "MTN"
                        },
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
  "_id": "60633ad0d7e9d4000f4916b9:62a8837eca543c007cc4d811"
}
```
