# eth_hashrate

## /v1/jsonrpc/:network/eth_hashrate

Returns the number of hashes per second that the node is mining with. Only applicable when the node is mining.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_hashrate`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_hashrate

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_hashrate","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_hashrate","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `HASHRATE` - a hex code of an integer representing the number of hashes per second.

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: "0x38a"
}
```
