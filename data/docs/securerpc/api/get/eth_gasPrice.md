# eth_gasPrice

## /v1/jsonrpc/:network/eth_gasPrice

Returns the number of hashes per second that the node is mining with.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_gasPrice`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_gasPrice

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_gasPrice","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}
```

### RESPONSE

#### RESULT FIELDS

- `HASHRATE` - a hex code of an integer representing the current gas price in wei.

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: "0x3b9acde7"
}
```
