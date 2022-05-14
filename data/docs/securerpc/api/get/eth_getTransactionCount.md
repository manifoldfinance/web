# eth_getTransactionCount

## /v1/jsonrpc/:network/eth_getTransactionCount

Returns the number of transactions sent from an address.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getTransactionCount?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `ADDRESS` _[required]_ - a string representing the address (20 bytes) to check for transaction count for
- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the
  [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getTransactionCount --data-urlencode 'params=["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getTransactionCount","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `TRANSACTION COUNT` - a hex code of the integer representing the number of transactions sent from this address.

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1a"
}
```
