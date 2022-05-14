# eth_protocolVersion

## /v1/jsonrpc/:network/eth_protocolVersion

Returns the current ethereum protocol version.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_protocolVersion`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_protocolVersion

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_protocolVersion","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_protocolVersion","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `PROTOCOL VERSION` - a string indicating the current ethereum protocol version

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: "54""
}
```
