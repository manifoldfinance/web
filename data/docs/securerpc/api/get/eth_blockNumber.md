# eth_blockNumber

## /v1/jsonrpc/:network/eth_blockNumber

Returns the number of most recent block.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_blockNumber`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_blockNumber

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":73}
```

### RESPONSE

#### RESULT FIELDS

- `BLOCK NUMBER` - a hex code of an integer representing the current block number the client is on.

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: "0x5c174e"
}
```
