Fetch the complete documentation index at: https://lenco-api.readme.io/llms.txt. Use this file to discover all available pages before exploring further. Append .md to any documentation page URL to get its markdown version.

# /account/:id/balance

Retrieve account balance of a specific bank account

Response schema:

[block:code]
{
"codes": [
{
"code": "{\n \"status\": boolean,\n \"message\": string,\n \"data\": {\n \"availableBalance\": string,\n \"currentBalance\": string,\n \"currency\": string,\n }\n}",
"language": "json"
}
]
}
[/block]
