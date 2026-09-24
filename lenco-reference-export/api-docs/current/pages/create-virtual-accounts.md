Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /virtual-accounts

Create a virtual account number

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
        "id": string,
        "accountReference": string,
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
            "bvn": string|null,
            "transactionReference": string|null,
            "amount": string|null,
            "minAmount": string|null
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
    "/virtual-accounts": {
      "post": {
        "summary": "/virtual-accounts",
        "description": "Create a virtual account number",
        "operationId": "create-virtual-accounts",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "accountName": {
                    "type": "string",
                    "description": "This allows you specify the name shown when the account is resolved"
                  },
                  "isStatic": {
                    "type": "boolean",
                    "description": "Optional. This allows you create an account number that doesn't expire",
                    "default": false
                  },
                  "transactionReference": {
                    "type": "string",
                    "description": "Optional. This is a transaction reference that would be returned each time a transfer is done to the account. Only `-`, `.`, `_` and alphanumeric characters allowed."
                  },
                  "amount": {
                    "type": "number",
                    "description": "Optional. The desired amount to be collected. If this amount does not match any amount received into the account, the transfer will be rejected. Only for dynamic virtual accounts. Use either amount or minAmount, not both.",
                    "format": "float"
                  },
                  "minAmount": {
                    "type": "number",
                    "description": "Optional. The desired minimum amount to be collected. If this amount is less than any amount received into the account, the transfer will be rejected. Only for dynamic virtual accounts. Use either amount or minAmount, not both.",
                    "format": "float"
                  },
                  "bvn": {
                    "type": "string",
                    "description": "This is only required for static accounts. It should be BVN number tied to the user the account number is being generated for."
                  },
                  "createNewAccount": {
                    "type": "boolean",
                    "description": "Optional. For static accounts. If set to true, a new account will be created. Else, the existing account (if any) will be returned. <br/>`Restricted feature`",
                    "default": false
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
                    "value": "{\n    \"status\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"id\": \"9e48b576-aecc-4e68-a033-1c6510c2f096\",\n        \"accountReference\": \"f0f1bcb4-ff82-4332-9521-2e5973089dfc\",\n        \"bankAccount\": {\n            \"accountName\": \"LENCO(Genesis)\",\n            \"accountNumber\": \"9999000086\",\n            \"bank\": {\n                \"code\": \"000023\",\n                \"name\": \"PROVIDUS BANK\"\n            }\n        },\n        \"type\": \"Dynamic Virtual Account\",\n        \"status\": \"active\",\n        \"createdAt\": \"2021-11-02T19:44:55.385Z\",\n        \"expiresAt\": \"2021-11-02T19:54:55.000Z\",\n        \"currency\": \"NGN\"\n    }\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
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
                              "example": "41567427-c8ce-4d02-ac2b-d3a5c5e354aa"
                            },
                            "accountReference": {
                              "type": "string",
                              "example": "7fc3db51-1f4a-4083-a373-b5363b15b6f2"
                            },
                            "bankAccount": {
                              "type": "object",
                              "properties": {
                                "accountName": {
                                  "type": "string",
                                  "example": "LENCO(Andre Ali)"
                                },
                                "accountNumber": {
                                  "type": "string",
                                  "example": "9999000031"
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
                            },
                            "type": {
                              "type": "string",
                              "example": "Static Virtual Account"
                            },
                            "status": {
                              "type": "string",
                              "example": "active"
                            },
                            "createdAt": {
                              "type": "string",
                              "example": "2021-11-02T17:14:49.904Z"
                            },
                            "expiresAt": {},
                            "currency": {
                              "type": "string",
                              "example": "NGN"
                            },
                            "meta": {
                              "type": "object",
                              "properties": {
                                "isStatic": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "bvn": {
                                  "type": "string",
                                  "example": "22202******"
                                },
                                "transactionReference": {},
                                "amount": {},
                                "minAmount": {}
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "message": {
                          "type": "string",
                          "example": "exists"
                        },
                        "data": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string",
                              "example": "41567427-c8ce-4d02-ac2b-d3a5c5e354aa"
                            },
                            "accountReference": {
                              "type": "string",
                              "example": "7fc3db51-1f4a-4083-a373-b5363b15b6f2"
                            },
                            "bankAccount": {
                              "type": "object",
                              "properties": {
                                "accountName": {
                                  "type": "string",
                                  "example": "LENCO(Andre Ali)"
                                },
                                "accountNumber": {
                                  "type": "string",
                                  "example": "9999000031"
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
                            },
                            "type": {
                              "type": "string",
                              "example": "Static Virtual Account"
                            },
                            "status": {
                              "type": "string",
                              "example": "active"
                            },
                            "createdAt": {
                              "type": "string",
                              "example": "2021-11-02T17:14:49.904Z"
                            },
                            "expiresAt": {},
                            "currency": {
                              "type": "string",
                              "example": "NGN"
                            }
                          }
                        }
                      }
                    },
                    {
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
                              "example": "9e48b576-aecc-4e68-a033-1c6510c2f096"
                            },
                            "accountReference": {
                              "type": "string",
                              "example": "f0f1bcb4-ff82-4332-9521-2e5973089dfc"
                            },
                            "bankAccount": {
                              "type": "object",
                              "properties": {
                                "accountName": {
                                  "type": "string",
                                  "example": "LENCO(Genesis)"
                                },
                                "accountNumber": {
                                  "type": "string",
                                  "example": "9999000086"
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
                            },
                            "type": {
                              "type": "string",
                              "example": "Dynamic Virtual Account"
                            },
                            "status": {
                              "type": "string",
                              "example": "active"
                            },
                            "createdAt": {
                              "type": "string",
                              "example": "2021-11-02T19:44:55.385Z"
                            },
                            "expiresAt": {
                              "type": "string",
                              "example": "2021-11-02T19:54:55.000Z"
                            },
                            "currency": {
                              "type": "string",
                              "example": "NGN"
                            }
                          }
                        }
                      }
                    }
                  ]
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
  "_id": "60633ad0d7e9d4000f4916b9:618245edf89385003f6e3c34"
}
```
