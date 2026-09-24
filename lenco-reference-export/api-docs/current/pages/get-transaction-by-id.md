Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /transaction/:id

Retrieve information about a specific transaction

Response Schema:

```json
{
    "status": boolean,
    "message": string,
    "data": {
        "id": string,
        "amount": string,
        "fee": string,
        "narration": string,
        "type": "credit" | "debit",
        "initiatedAt": date-time | null,
        "completedAt": date-time | null,
        "accountId": string,
        "details": {
            "accountName": string,
            "accountNumber": string,
            "bank": {
                "code": string,
                "name": string,
            }
        } | null,
        "status": "pending" | "successful" | "failed" | "declined",
        "failedAt": date-time | null,
        "reasonForFailure": string | null,
        "clientReference": string | null,
        "transactionReference": string,
        "nipSessionId": string | null
    }
}
```
