# eth_getCode

## /v1/jsonrpc/:network/eth_getCode

Returns code at a given address.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getCode?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `ADDRESS` _[required]_ - a string representing the address (20 bytes) of the code
- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the
  [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getCode --data-urlencode 'params=["0x06012c8cf97bead5deae237070f9587f8e7a266d","latest"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getCode","params": ["0x06012c8cf97bead5deae237070f9587f8e7a266d"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getCode","params": ["0x06012c8cf97bead5deae237070f9587f8e7a266d"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `CODE` - a hex of the code at the given address

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x606060............"
}
```
