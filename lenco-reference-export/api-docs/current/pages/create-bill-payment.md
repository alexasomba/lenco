Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /bills

Create a bill payment.
Kindly note that the account you select as `debitAccountId` should be funded as it would be debited for a successful API call.

Response Schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"amount\": string,\n \"vendor\": {\n \"id\": string,\n \"name\": string,\n },\n \"category\": \"airtime\" | \"mobile-data\" | \"cable-tv\" | \"electricity\",\n \"product\": {\n \"id\": string,\n \"name\": string,\n \"vendor\": {\n \"id\": string,\n \"name\": string,\n },\n \"amount\": {\n \"type\": \"fixed\" | \"range\",\n \"fixed\": string | null,\n \"minimum\": string | null,\n \"maximum\": string | null,\n },\n \"customerIdLabel\": string,\n \"category\": \"airtime\" | \"mobile-data\" | \"cable-tv\" | \"electricity\",\n \"commissionPercentage\": string,\n },\n \"details\": {\n \"customerId\": string,\n \"customerName\": string,\n },\n \"debitAccountId\": string,\n \"instructions\": string | null,\n \"initiatedAt\": date-time,\n \"status\": \"pending\" | \"successful\" | \"failed\",\n \"completedAt\": date-time | null,\n \"failedAt\": date-time | null,\n \"reasonForFailure\": string | null,\n \"clientReference\": string | null,\n \"transactionReference\": string,\n \"commission\": string | null,\n }\n}",
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
    "/bills": {
      "post": {
        "summary": "/bills",
        "description": "Create a bill payment.\nKindly note that the account you select as `debitAccountId` should be funded as it would be debited for a successful API call.",
        "operationId": "create-bill-payment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["productId", "customerId", "debitAccountId"],
                "properties": {
                  "productId": {
                    "type": "string",
                    "description": "ID of the product"
                  },
                  "customerId": {
                    "type": "string",
                    "description": "This is the customer identifier for the bill payment e.g. for airtime, the identifier would be the customer's mobile number."
                  },
                  "debitAccountId": {
                    "type": "string",
                    "description": "Your 36-character account uuid to transfer from."
                  },
                  "amount": {
                    "type": "string",
                    "description": "Required if the product amount type is `range`"
                  },
                  "reference": {
                    "type": "string",
                    "description": "Optional. Unique client reference. Only `-`, `.`, `_` and alphanumeric characters allowed."
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
                    "value": "{\n  \"status\": true,\n  \"message\": \"\",\n  \"data\": {\n    \"id\": \"e92fc004-bb3c-430f-836d-f2d1ccd4bbcc\",\n    \"amount\": \"1000.00\",\n    \"vendor\": {\n      \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n      \"name\": \"MTN\"\n    },\n    \"category\": \"airtime\",\n    \"product\": {\n      \"id\": \"b0b5f412-0a76-4dd8-b070-a62764d519bd\",\n      \"name\": \"Airtime Topup\",\n      \"vendor\": {\n        \"id\": \"70284a19-560d-430d-b1ef-a16fe9107d1f\",\n        \"name\": \"MTN\"\n      },\n      \"amount\": {\n        \"type\": \"range\",\n        \"fixed\": null,\n        \"minimum\": \"5.00\",\n        \"maximum\": \"50000.00\"\n      },\n      \"category\": \"airtime\",\n      \"customerIdLabel\": \"Mobile Number\",\n      \"commissionPercentage\": \"2.50\"\n    },\n    \"debitAccountId\": \"3ec7dbca-7bf3-486f-9e08-958d0e8e885d\",\n    \"instructions\": null,\n    \"initiatedAt\": \"2022-01-01T00:01:00.710Z\",\n    \"completedAt\": \"2022-01-01T00:01:02.000Z\",\n    \"failedAt\": null,\n    \"details\": {\n      \"customerId\": \"+2348030000000\",\n      \"customerName\": \"\"\n    },\n    \"status\": \"successful\",\n    \"reasonForFailure\": null,\n    \"clientReference\": \"ref-1\",\n    \"transactionReference\": \"220613.39955607\",\n    \"commission\": \"25.00\"\n  }\n}"
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
                          "example": "e92fc004-bb3c-430f-836d-f2d1ccd4bbcc"
                        },
                        "amount": {
                          "type": "string",
                          "example": "1000.00"
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
                        "category": {
                          "type": "string",
                          "example": "airtime"
                        },
                        "product": {
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
                        },
                        "debitAccountId": {
                          "type": "string",
                          "example": "3ec7dbca-7bf3-486f-9e08-958d0e8e885d"
                        },
                        "instructions": {},
                        "initiatedAt": {
                          "type": "string",
                          "example": "2022-01-01T00:01:00.710Z"
                        },
                        "completedAt": {
                          "type": "string",
                          "example": "2022-01-01T00:01:02.000Z"
                        },
                        "failedAt": {},
                        "details": {
                          "type": "object",
                          "properties": {
                            "customerId": {
                              "type": "string",
                              "example": "+2348030000000"
                            },
                            "customerName": {
                              "type": "string",
                              "example": ""
                            }
                          }
                        },
                        "status": {
                          "type": "string",
                          "example": "successful"
                        },
                        "reasonForFailure": {},
                        "clientReference": {
                          "type": "string",
                          "example": "ref-1"
                        },
                        "transactionReference": {
                          "type": "string",
                          "example": "220613.39955607"
                        },
                        "commission": {
                          "type": "string",
                          "example": "25.00"
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
  "_id": "60633ad0d7e9d4000f4916b9:62a893dc06fb0a00449d4eb7"
}
```
