# Lenco API docs — current

Source index: https://lenco-api.readme.io/llms.txt

Downloaded 50 indexed Markdown pages.

## Pages

- [Welcome to Lenco's API doc](pages/introduction.md)
- [Getting Started](pages/get-started.md) — This page will help you get started with Lenco API
- [/accounts](pages/get-accounts.md) — Retrieve information about your bank accounts
- [/account/:id](pages/get-account-by-id.md) — Retrieve information about a specific bank account
- [/account/:id/balance](pages/get-account-balance.md) — Retrieve account balance of a specific bank account
- [/recipients](pages/get-recipients.md) — Retrieve information about all your recipients
- [/recipient/:id](pages/get-recipient-by-id.md) — Retrieve information about a specific recipient
- [/recipients](pages/create-recipient.md) — Create a new recipient
- [/banks](pages/get-banks.md) — Get list of banks and financial institutions
- [/resolve](pages/resolve-account.md) — Verify/resolve account details
- [/transactions](pages/get-transactions.md) — Get transactions that occurred on your bank accounts
- [/transaction/:id](pages/get-transaction-by-id.md) — Retrieve information about a specific transaction
- [/transactions](pages/create-transaction.md) — Create a new transaction, currently only supporting bank transfer
- [/transaction-by-reference/:reference](pages/get-transaction-by-reference.md) — Retrieve information about a specific transaction using the client reference
- [/transfer](pages/create-transfer.md) — Create a new bank transfer transaction
- [/transfer/by-reference/:reference](pages/get-transfer-by-reference.md) — Retrieve information about a specific bank transfer transaction using the reference
- [/transfer/bulk](pages/create-bulk-transfer.md) — Create a bulk transfer, currently only supporting bank transfer
- [/transfer/bulk/by-reference/:reference](pages/get-bulk-transfer-by-reference.md) — Retrieve information about a bulk transfer using the reference
- [/virtual-accounts](pages/create-virtual-accounts.md) — Create a virtual account number
- [/virtual-accounts](pages/get-static-virtual-accounts.md) — Get list of all static virtual accounts
- [/virtual-accounts/:account-reference](pages/get-virtual-account-by-account-reference.md) — Get a virtual account details by the account reference - both dynamic and static
- [/virtual-account-by-bvn/:bvn](pages/get-static-virtual-account-by-bvn.md) — Get a static virtual account details by the bvn
- [/virtual-accounts/transactions](pages/get-virtual-account-transactions.md) — Get only successful transactions that occurred on your virtual accounts
- [/virtual-accounts/transactions/:transaction-id](pages/get-virtual-account-transaction-by-id.md) — Retrieve information about a specific successful transaction that occurred on a virtual account
- [/virtual-accounts/rejected-transactions](pages/get-rejected-virtual-account-transactions.md) — Get only rejected transactions that occurred on your virtual accounts
- [/virtual-accounts/rejected-transactions/:transaction-id](pages/get-rejected-virtual-account-transaction-by-id.md) — Retrieve information about a specific rejected transaction that occurred on a virtual account
- [/virtual-accounts/all-transactions](pages/get-all-virtual-account-transactions.md) — Get all successful and rejected transactions that occurred on your virtual accounts
- [Bill Payments](pages/bill-payments.md)
- [/bills/vendors](pages/bills-vendors.md) — Get the list of vendors for bill payments. You can filter this list by the bill payment category.
- [/bills/vendors/by-category/:category](pages/bills-vendors-by-category.md) — Get the list of vendors for bill payments for a specified bill payment category.
- [/bills/vendors/:id](pages/bills-vendor-by-id.md) — Retrieve information about a specific vendor for bill payments
- [/bills/products](pages/bills-products.md) — Get the list of vendors for bill payments. You can filter this list by the bill payment category.
- [/bills/products/by-category/:category](pages/bills-products-by-category.md) — Get the list of vendors for bill payments for a specified bill payment category.
- [/bills/products/by-vendor/:vendorId](pages/bills-products-by-vendor-id.md) — Get the list of vendors for bill payments for a specified bill payment category.
- [/bills/products/:id](pages/bills-product-by-id.md) — Retrieve information about a specific vendor for bill payments
- [/bills/lookup-account](pages/bills-lookup-account.md) — Verify / lookup customer account details for cable-tv and electricity
- [/bills](pages/create-bill-payment.md) — Create a bill payment. Kindly note that the account you select as `debitAccountId` should be funded as it would be debited for a successful API call.
- [/bills/:id](pages/bill-payment-by-id.md) — Retrieve information about a specific bill payment
- [/bills/by-reference/:reference](pages/billsby-referencereference.md) — Retrieve information about a specific bill payment using the client reference
- [/bills](pages/get-bill-payments.md) — Get bill payments that occurred on your bank accounts
- [/point-of-sale/terminals](pages/get-assigned-pos-terminals.md) — Retrieve information about your assigned POS terminals
- [/point-of-sale/terminals/:id](pages/get-assigned-pos-terminal-by-id.md) — Get details of an assigned POS terminal
- [/point-of-sale/terminals/assign](pages/assign-pos-terminal.md) — Assign a POS terminal
- [/point-of-sale/terminals/unassign](pages/unassign-pos-terminal.md) — Unassign a POS terminal
- [/point-of-sale/transactions](pages/get-pos-transactions.md)
- [/point-of-sale/transactions/:id](pages/get-pos-transaction-by-id.md) — Retrieve information about a specific POS transaction
- [/point-of-sale/transactions/by-reference/:reference](pages/get-pos-transaction-by-reference.md) — Retrieve information about a specific POS transaction using the reference
- [/point-of-sale/transactions/webhook/repush](pages/repush-pos-transaction-webhook.md) — Repush the webhook notification for a POS transaction
- [Webhooks](pages/webhooks.md) — Learn how to listen to events whenever certain actions occur on your integration.
- [Pricing](pages/pricing.md)
