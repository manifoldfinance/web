# eth_getBalance

## /v1/jsonrpc/:network/eth_getBalance

Returns the balance of the account of given address.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getBalance?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `ADDRESS` _[required]_ - a string representing the address (20 bytes) to check for balance

- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the
  [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getBalance --data-urlencode 'params=["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"],"id":73}
```

### RESPONSE

#### RESULT FIELDS

- `BALANCE` - integer of the current balance in wei.

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x29a33d8a9314006"
}
```
