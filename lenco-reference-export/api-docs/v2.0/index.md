# Lenco API docs — v2.0

Source index: https://lenco-api.readme.io/v2.0/llms.txt

Downloaded 38 indexed Markdown pages.

## Pages

- [Welcome to Lenco's API doc](pages/introduction.md)
- [Getting Started](pages/get-started.md) — This page will help you get started with Lenco API
- [Accept Payments](pages/accept-payments.md)
- [Test Cards and Accounts](pages/test-cards-and-accounts.md)
- [/accounts](pages/get-accounts.md) — Retrieve information about your bank accounts
- [/accounts/:id](pages/get-account-by-id.md) — Retrieve information about a specific bank account
- [/accounts/:id/balance](pages/get-account-balance.md) — Retrieve account balance of a specific bank account
- [/banks](pages/get-banks.md) — Get list of banks and financial institutions
- [/resolve/bank-account](pages/resolve-bank-account.md) — Verify/resolve account details
- [/resolve/mobile-money](pages/resolve-mobile-money-account.md)
- [/resolve/lenco-money](pages/resolve-lenco-money-account.md)
- [/resolve/lenco-merchant](pages/resolve-lenco-merchant-account.md)
- [/transfer-recipients](pages/get-transfer-recipients.md) — Retrieve information about all your transfer recipients
- [/transfer-recipients/:id](pages/get-transfer-recipient-by-id.md) — Retrieve information about a specific transfer recipient
- [/transfer-recipients/bank-account](pages/create-transfer-recipient-as-bank-account.md) — Create transfer recipient as a bank account
- [/transfer-recipients/mobile-money](pages/create-transfer-recipient-as-mobile-money.md) — Create transfer recipient as a mobile money
- [/transfer-recipients/lenco-money](pages/create-transfer-recipient-as-lenco-money.md) — Create transfer recipient as a bank account
- [/transfer-recipients/lenco-merchant](pages/create-transfer-recipient-as-lenco-merchant.md) — Create transfer recipient as a bank account
- [/transfers](pages/get-transfers.md) — Retrieve information about your transfers
- [/transfers/:id](pages/get-transfer-by-id.md) — Retrieve information about a specific transfer
- [/transfers/status/:reference](pages/get-transfer-by-reference.md) — Retrieve information about a specific transfer using the reference you used when initiating the transfer
- [/transfers/bank-account](pages/initiate-transfer-to-bank-account.md) — Initiate transfer to a bank account
- [/transfers/mobile-money](pages/initiate-transfer-to-mobile-money.md) — Initiate transfer to a mobile money account. Currently supporting only Malawi and Zambia
- [/transfers/lenco-money](pages/initiate-transfer-to-lenco-money.md)
- [/transfers/lenco-merchant](pages/initiate-transfer-to-lenco-merchant.md)
- [/transfers/account](pages/initiate-transfer-to-account.md) — Initiate a transfer to one of your accounts
- [/collections](pages/get-collections.md)
- [/collections/:id](pages/get-collection-by-id.md) — Retrieve information about a specific collection request
- [/collections/status/:reference](pages/get-collection-by-reference.md) — Retrieve information about a specific collection request using the reference of the request
- [/collections/mobile-money](pages/initiate-collection-from-mobile-money.md)
- [/collections/card](pages/initiate-collection-from-card.md)
- [/settlements](pages/get-settlements.md) — Retrieve information about all your collection settlements
- [/settlements/:id](pages/get-settlement-by-id.md) — Retrieve information about a specific settlement
- [/transactions](pages/get-transactions.md) — Get transactions that occurred on your accounts
- [/transactions/:id](pages/get-transaction-by-id.md) — Retrieve information about a specific transaction
- [Webhooks](pages/webhooks.md) — Learn how to listen to events whenever certain actions occur on your integration.
- [Encryption](pages/encryption.md)
- [/encryption-key](pages/get-encryption-key.md) — Get RSA public key to [encrypt a request payload](https://lenco-api.readme.io/v2.0/reference/encryption)
