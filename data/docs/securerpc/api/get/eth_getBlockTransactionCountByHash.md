# eth_getBlockTransactionCountByHash

## /v1/jsonrpc/:network/eth_getBlockTransactionCountByHash

Returns the number of transactions in a block from a block matching the given block hash.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getBlockTransactionCountByHash?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `BLOCK HASH` _[required]_ - a string representing the hash (32 bytes) of a block

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getBlockTransactionCountByHash --data-urlencode 'params=["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params": ["0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `BLOCK TRANSACTION COUNT` - a hex code of the integer representing the number of transactions in the provided block

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x50"
}
```
