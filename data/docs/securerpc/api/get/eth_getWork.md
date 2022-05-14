# eth_getWork

## /v1/jsonrpc/:network/eth_getWork

Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target").

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getWork`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getWork

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getWork","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getWork","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `WORK ARRAY`
  - 32 Bytes - current block header pow-hash
  - 32 Bytes - the seed hash used for the DAG.
  - 32 Bytes - the boundary condition ("target"), 2^256 / difficulty.

#### BODY

```js
{
  "id":1,
  "jsonrpc":"2.0",
  "result": [
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
      "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
    ]
}
```
