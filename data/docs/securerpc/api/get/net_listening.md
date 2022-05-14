# net_listening

## /v1/jsonrpc/:network/net_listening

Returns true if client is actively listening for network connections.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/net_listening`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/net_listening

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"net_listening","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `LISTENING FLAG` - a boolean indicating whether the client is actively listening for network connections

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: true
}
```
