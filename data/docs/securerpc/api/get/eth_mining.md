# eth_mining

## /v1/jsonrpc/:network/eth_mining

Returns true if client is actively mining new blocks.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_mining`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_mining

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_mining","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_mining","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `IS MINING FLAG` - a boolean indicating if the client is mining

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: true
}
```
