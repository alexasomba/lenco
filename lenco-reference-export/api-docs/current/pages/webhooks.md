Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# Webhooks

Learn how to listen to events whenever certain actions occur on your integration.

## What are webhooks?

Whenever certain transaction actions occur on your Lenco API integration, we trigger events which your application can listen to. This is where webhooks come in. A webhook is a URL on your server where we send payloads for such events. For example, if you implement webhooks, once a transaction is successful, we will immediately notify your server with a `transaction.successful` event. Here is a [list of events](#types-of-events) we can send to your webhook URL.

> 📘
>
> **NB**: Not in all cases would you be able to rely completely on webhooks to get notified, an example is if your server is experiencing a downtime and your hook endpoints are affected, some customers might still be transacting independently of that and the hook call triggered would fail because your server was unreachable.
>
> _In such cases we advise that developers set up a re-query service that goes to poll for the transaction status at regular intervals e.g. every 30 minutes using the `/transactions/:id` or `/transactions-by-reference/:reference` endpoint, till a successful or failed response is returned._

To setup your webhook URL, kindly reach out to <support@lenco.ng>

**Here are some things to note when setting up a webhook URL:**

1. If using .htaccess, remember to add the trailing / to the url you set.
2. Do a test post to your URL and ensure the script gets the post body.
3. Ensure your webhook URL is publicly available (localhost URLs cannot receive events)

## Receiving an event

All you have to do to receive the event is to create an unauthenticated POST route on your application. The event object is sent as JSON in the request body.

```javascript Node
// Using Express
app.post('/my/webhook/url', function (req, res) {
  // Retrieve the request's body
  var event = req.body
  // Do something with event
  res.send(200)
})
```

```php
<?php
// Retrieve the request's body and parse it as JSON
$input = @file_get_contents("php://input");
$event = json_decode($input);
// Do something with $event
http_response_code(200); // PHP 5.4 or greater
?>
```

## Verifying events

It is important to verify that events originate from Lenco to avoid delivering value based on a counterfeit event.\
Valid events are raised with an header `X-Lenco-Signature` which is essentially a HMAC SHA512 signature of the event payload signed using your `webhook_hash_key`.\
The `webhook_hash_key` is a SHA256 hash of your API token.

```javascript Node
var crypto = require('crypto')
var secret = process.env.SECRET_KEY
var webhookHashKey = crypto.createHash('sha256').update(secret).digest('hex')
// Using Express
app.post('/my/webhook/url', function (req, res) {
  //validate event
  var hash = crypto
    .createHmac('sha512', webhookHashKey)
    .update(JSON.stringify(req.body))
    .digest('hex')
  if (hash === req.headers['x-lenco-signature']) {
    // Retrieve the request's body
    var event = req.body
    // Do something with event
  }
  res.send(200)
})
```

```php
<?php
// only a post with lenco signature header gets our attention
if ((strtoupper($_SERVER['REQUEST_METHOD']) != 'POST' ) || !array_key_exists('HTTP_X_LENCO_SIGNATURE', $_SERVER) )
    exit();
// Retrieve the request's body
$input = @file_get_contents("php://input");
define('LENCO_SECRET_KEY','SECRET_KEY');
$webhook_hash_key = hash("sha256", LENCO_SECRET_KEY);
// validate event do all at once to avoid timing attack
if($_SERVER['HTTP_X_LENCO_SIGNATURE'] !== hash_hmac('sha512', $input, $webhook_hash_key))
    exit();
http_response_code(200);
// parse event (which is json string) as object
// Do something - that will not take long - with $event
$event = json_decode($input);
exit();
?>
```

## Responding to an event

You should respond to an event with a `200` OK. We consider this an acknowledgement by your application. If your application responds with any status outside of either `200`, `201`, or `202`, we will consider it unacknowledged and thus, continue to send it every hour for 24 hours. You don't need to send a request body or some other parameter as it would be discarded - we only pay attention to the status code.

If your application is likely to start a long running task in response to the event, Lenco may timeout waiting for the response and would ultimately consider the event unacknowledged and queue to be raised later. You can mitigate duplicity by having your application respond immediately with a 200 before it goes on to perform the rest of the task.

## Types of events

Here are the events we currently raise. We would add more to this list as we hook into more actions in the future.

| Event                                | Description                                                                          |
| :----------------------------------- | :----------------------------------------------------------------------------------- |
| transaction.successful               | A transaction was successfully completed on an account linked to your API token      |
| transaction.failed                   | A transaction you attempted on an account linked to your API token has failed        |
| account.balance-updated              | The balance of an account linked to your API token has changed                       |
| virtual-account.transaction          | A virtual account linked to your API token has received a successful credit transfer |
| virtual-account.transaction.settled  | Your account was credited for a virtual account transaction                          |
| virtual-account.rejected-transaction | A transfer into a virtual account was rejected, and will be refunded to the sender   |
| bill-payment.successful              | A bill payment was successfully completed on an account linked to your API token     |
| bill-payment.failed                  | A bill payment you attempted on an account linked to your API token has failed       |
| pos-transaction                      | A POS transaction has taken place                                                    |
| pos-transaction.settled              | Your account was credited for a POS transaction                                      |
| pos-terminal.updated                 | An assigned POS terminal has been updated                                            |

```json transaction.successful
{
    "event": "transaction.successful",
    "data": {
        "id": string,
        "amount": string,
        "fee": string,
        "narration": string,
        "type": "credit" | "debit",
        "initiatedAt": date-time | null,
        "completedAt": date-time,
        "accountId": string,
        "details": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
                "code": string,
                "name": string,
            }
        } | null,
        "status": "successful",
        "failedAt": null,
        "reasonForFailure": null,
        "clientReference": string | null,
        "transactionReference": string,
        "nipSessionId": string | null
    }
}
```

```json transaction.failed
{
    "event": "transaction.failed",
    "data": {
        "id": string,
        "amount": string,
        "fee": string,
        "narration": string,
        "type": "debit",
        "initiatedAt": date-time | null,
        "completedAt": null,
        "accountId": string,
        "details": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
                "code": string,
                "name": string,
            }
        } | null,
        "status": "failed",
        "failedAt": date-time,
        "reasonForFailure": string,
        "clientReference": string | null,
        "transactionReference": string,
        "nipSessionId": string | null
    }
}
```

```json account.balance-updated
{
    "event": "account.balance-updated",
    "data": {
        "id": string,
        "name": string,
        "bankAccount": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
                "code": string,
                "name": string,
            }
        },
        "type": string,
        "status": "active" | "deleted",
        "availableBalance": string,
        "currentBalance": string,
        "currency": string,
        "createdAt": date-time
    }
}
```

```json virtual-account.transaction
{
    "event": "virtual-account.transaction",
    "data": {
        "id": string,
        "transactionAmount": string,
        "fee": string,
        "stampDuty": string,
        "settlementAmount": string,
        "currency": string,
        "type": "credit",
        "status": "successful",
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
            "type": "Static Virtual Account"|"Dynamic Virtual Account",
            "status": "active"|"expired"|"blacklisted"|"deleted",
            "createdAt": date-time,
            "expiresAt": date-time|null,
            "currency": string
        },
        "accountReference": string,
        "settlementAccountId": string,
        "datetime": date-time,
        "nipSessionId": string,
        "transactionReference": string | null,
        "settlementStatus": "pending" | "settled"
    }
}
```

```json virtual-account.transaction.settled
{
    "event": "virtual-account.transaction.settled",
    "data": {
        "id": string,
        "transactionAmount": string,
        "fee": string,
        "stampDuty": string,
        "settlementAmount": string,
        "currency": string,
        "type": "credit",
        "status": "successful",
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
            "type": "Static Virtual Account"|"Dynamic Virtual Account",
            "status": "active"|"expired"|"blacklisted"|"deleted",
            "createdAt": date-time,
            "expiresAt": date-time|null,
            "currency": string
        },
        "accountReference": string,
        "settlementAccountId": string,
        "datetime": date-time,
        "nipSessionId": string,
        "transactionReference": string | null,
        "settlementStatus": "settled"
    }
}
```

```json virtual-account.rejected-transaction
{
    "event": "virtual-account.rejected-transaction",
    "data": {
        "id": string,
        "transactionAmount": string,
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
            "currency": string
        },
        "accountReference": string,
        "datetime": date-time,
        "nipSessionId": string,
        "transactionReference": string | null,
        "reasonForRejection": {
            "code": string,
            "message": string
        }
    }
}
```

```json bill-payment.successful
{
    "event": "bill-payment.successful",
    "data": {
    "id": string,
    "amount": string,
    "vendor": {
      "id": string,
      "name": string,
    },
    "category": "airtime" | "mobile-data" | "cable-tv" | "electricity",
    "product": {
      "id": string,
      "name": string,
      "vendor": {
        "id": string,
        "name": string,
      },
      "amount": {
        "type": "fixed" | "range",
        "fixed": string | null,
        "minimum": string | null,
        "maximum": string | null,
      },
      "customerIdLabel": string,
      "category": "airtime" | "mobile-data" | "cable-tv" | "electricity",
      "commissionPercentage": string,
    },
    "details": {
      "customerId": string,
      "customerName": string,
    },
    "debitAccountId": string,
    "instructions": string | null,
    "initiatedAt": date-time,
    "status": "pending" | "successful" | "failed",
    "completedAt": date-time | null,
    "failedAt": date-time | null,
    "reasonForFailure": string | null,
    "clientReference": string | null,
    "transactionReference": string,
    "commission": string | null,
  }
}
```

```json bill-payment.failed
{
    "event": "bill-payment.failed",
    "data": {
    "id": string,
    "amount": string,
    "vendor": {
      "id": string,
      "name": string,
    },
    "category": "airtime" | "mobile-data" | "cable-tv" | "electricity",
    "product": {
      "id": string,
      "name": string,
      "vendor": {
        "id": string,
        "name": string,
      },
      "amount": {
        "type": "fixed" | "range",
        "fixed": string | null,
        "minimum": string | null,
        "maximum": string | null,
      },
      "customerIdLabel": string,
      "category": "airtime" | "mobile-data" | "cable-tv" | "electricity",
      "commissionPercentage": string,
    },
    "details": {
      "customerId": string,
      "customerName": string,
    },
    "debitAccountId": string,
    "instructions": string | null,
    "initiatedAt": date-time,
    "status": "pending" | "successful" | "failed",
    "completedAt": date-time | null,
    "failedAt": date-time | null,
    "reasonForFailure": string | null,
    "clientReference": string | null,
    "transactionReference": string,
    "commission": string | null,
  }
}
```

```json pos-transaction
{
  "event": "pos-transaction",
  "data": {
    "id": string,
    "reference": string,
    "amount": string,
    "stampDuty": string | null,
    "fee": string | null,
    "settlementAmount": string | null,
    "type": "card-payment" | "transfer",
    "status": "successful" | "failed",
    "datetime": date-time,
    "message": string,
    "cardPayment": {
      "pan": string,
      "stan": string,
      "rrn": string,
      "responseCode": string | null,
      "responseMessage": string | null
    } | null,
    "transfer": {
      "sender": string | null,
      "description": string,
      "sessionId": string | null
    } | null,
    "terminal": {
      "id": string,
      "name": string,
      "address": string | null,
      "phone": string | null,
      "serialNumber": string,
      "model": string | null,
      "assignedAt": date-time,
      "settlementAccountId": string | null,
      "accountDetails": {
        "accountName": string,
        "accountNumber": string,
        "bankName": string,
      } | null,
      "status": "assigned" | "unassigned",
      "unassignedAt": date-time | null
    },
    "settlementStatus": "pending" | "successful" | "failed" | null
  }
}
```

```json pos-transaction.settled
{
  "event": "pos-transaction.settled",
  "data": {
    "id": string,
    "reference": string,
    "amount": string,
    "stampDuty": string | null,
    "fee": string | null,
    "settlementAmount": string | null,
    "type": "card-payment" | "transfer",
    "status": "successful" | "failed",
    "datetime": date-time,
    "message": string,
    "cardPayment": {
      "pan": string,
      "stan": string,
      "rrn": string,
      "responseCode": string | null,
      "responseMessage": string | null
    } | null,
    "transfer": {
      "sender": string | null,
      "description": string,
      "sessionId": string | null
    } | null,
    "terminal": {
      "id": string,
      "name": string,
      "address": string | null,
      "phone": string | null,
      "serialNumber": string,
      "model": string | null,
      "assignedAt": date-time,
      "settlementAccountId": string | null,
      "accountDetails": {
        "accountName": string,
        "accountNumber": string,
        "bankName": string,
      } | null,
      "status": "assigned" | "unassigned",
      "unassignedAt": date-time | null
    },
    "settlementStatus": "pending" | "successful" | "failed" | null
  }
}
```

```json pos-terminal.updated
{
  "event": "pos-terminal.updated",
  "data": {
    "id": string,
    "name": string,
    "address": string | null,
    "phone": string | null,
    "serialNumber": string,
    "model": string | null,
    "assignedAt": date-time,
    "settlementAccountId": string | null,
    "accountDetails": {
      "accountName": string,
      "accountNumber": string,
      "bankName": string,
    } | null,
    "status": "assigned" | "unassigned",
    "unassignedAt": date-time | null
  }
}
```
