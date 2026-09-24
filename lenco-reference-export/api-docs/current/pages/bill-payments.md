Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# Bill Payments

With the Lenco API, you can pay for several kinds of bills (including airtime, mobile data, electricity and cable TV) directly from your Lenco account.

[block:callout]
{
"type": "success",
"body": "You earn a commission for each successful bill payment."
}
[/block]

When paying bills on Lenco, you'll make a POST request to the [create bill payment endpoint](https://lenco-api.readme.io/reference/create-bill-payment). You'll need to specify:

- `productId`: The id of the bill product. [Here's how to get this value](https://lenco-api.readme.io/reference/bill-payments-intro#understanding-vendors-and-products).
- `customerId`: An identifier for the customer, such as their phone number or decoder number. [Here's how to get this value](https://lenco-api.readme.io/reference/bill-payments-intro#validating-a-customers-details).
- `debitAccountId`: The ID of your Lenco account to debit for this bill payment.
- `amount`: The amount to be paid for the bill. The amount will be deducted from the Lenco account you specified. If the amount type of the product you are paying for is `fixed`, you can leave this field empty.
- `reference`: An optional reference code to identify the transaction. It should be unique for each transaction. Only `-`, `.`, `_` and alphanumeric characters are allowed.

[block:callout]
{
"type": "info"
}
[/block]

[block:api-header]
{
"title": "Understanding Vendors and Products"
}
[/block]

Our bill `products` are grouped into categories: `airtime`, `mobile-data`, `cable-tv`, and `electricity`.
They are also grouped by their `vendors` (the company that is offering the service). A vendor can have multiple products across different categories (e.g MTN has products for airtime and mobile data).

You can make a GET request for [the list of all vendors](https://lenco-api.readme.io/reference/bills-vendors) or [the list of vendors for a specific category](https://lenco-api.readme.io/reference/bills-vendors-by-category).
You can also make a GET request to get the list of [all products](https://lenco-api.readme.io/reference/bills-products) or the [products for a specific category](https://lenco-api.readme.io/reference/bills-products-by-category) or [the products for a specific vendor](https://lenco-api.readme.io/reference/bills-products-by-vendor-id).

When the customer selects the product to pay for, you simply get the `id` and pass it as `productId` to the [create bill payment endpoint](https://lenco-api.readme.io/reference/create-bill-payment).

[block:callout]
{
"type": "info",
"body": "There is only one airtime product for each vendor that offers it"
}
[/block]

The amount type for a product (`product.amount.type`) can be either `range` or `fixed`. If the amount type is `fixed`, then you do not need to send `amount` when creating a bill payment.
If the amount type is `range`, then ensure the `amount` you send when creating a bill payment falls within the `product.amount.minimum` and `product.amount.maximum` values (inclusive).

[block:api-header]
{
"title": "Validating a customer's details"
}
[/block]

The `customerId` is the customer identifier for the requested service.
For example, it would be the customer's mobile number for airtime and mobile data, while it would be the smart card number for cable tv bills.

Each product includes a `customerIdLabel` property which contains the description of the identifier. You can put this label next to the input field where the customerId is to be filled.

To validate the customer's details, send the `customerId` and either the `productId` or the `vendorId` to the [verify customer details endpoint](https://lenco-api.readme.io/reference/bills-lookup-account)

[block:api-header]
{
"title": "Webhook Notification"
}
[/block]

We will notify you when a bill payment is successful (`bill-payment.successful`) or fails (`bill-payment.failed`).
You can find view the details [here](https://lenco-api.readme.io/reference/webhooks#types-of-events).
