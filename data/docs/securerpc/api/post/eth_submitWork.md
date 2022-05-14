# eth_submitWork

## /v1/jsonrpc/:network/eth_submitWork

Used for submitting a proof-of-work solution.

### REQUEST

`POST https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_submitWork`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD

- `WORK ARRAY`
  - 8 Bytes - The nonce found (64 bits)
  - 32 Bytes - The header's pow-hash (256 bits)
  - 32 Bytes - The mix digest (256 bits)

#### EXAMPLE

```bash
// HTTP POST api.backbonecabal.xyz
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}'

// HTTP POST mainnet.backbonecabal.xyz
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_submitWork","params": ["0x0000000000000001","0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `IS VALID FLAG` - returns true if the provided solution is valid, otherwise false.

#### BODY

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": false
}
```
