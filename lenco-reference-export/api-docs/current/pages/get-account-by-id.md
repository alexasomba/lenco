Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /account/:id

Retrieve information about a specific bank account

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"id\": string,\n \"name\": string,\n \"bankAccount\": {\n \"accountName\": string,\n \"accountNumber\": string,\n \"bank\": {\n \"code\": string,\n \"name\": string,\n }\n },\n \"type\": string,\n \"status\": \"active\" | \"deleted\",\n \"availableBalance\": string,\n \"currentBalance\": string,\n \"currency\": string,\n \"createdAt\": date-time\n }\n}",
"language": "json"
}
]
}
[/block]
