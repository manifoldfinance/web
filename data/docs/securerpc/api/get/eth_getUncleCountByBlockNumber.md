# eth_getUncleCountByBlockNumber

## /v1/jsonrpc/:network/eth_getUncleCountByBlockNumber

Returns the number of uncles in a block from a block matching the given block number.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getUncleCountByBlockNumber?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the
  [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getUncleCountByBlockNumber --data-urlencode 'params=["latest"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["latest"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params": ["latest"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `BLOCK TRANSACTION COUNT` - a hex code of the integer representing the number of uncles in the provided block

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x57"
}
```
