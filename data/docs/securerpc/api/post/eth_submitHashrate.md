# eth_submitHashrate

## /v1/jsonrpc/:network/eth_submitHashrate

Used for submitting mining hashrate.

### REQUEST

`POST https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_submitHashrate`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD

- `HASHRATE` _[required]_ - a hexadecimal string representation (32 bytes) of the hash rate
- `ID` _[required]_ - a string representing a random hexadecimal (32 bytes) ID identifying the client

#### EXAMPLE

```bash
// HTTP POST api.backbonecabal.xyz
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_submitHashrate","params":["0x0000000000000000000000000000000000000000000000000000000000500000", "0x59daa26581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"],"id":1}'

// HTTP POST mainnet.backbonecabal.xyz
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_submitHashrate","params":["0x0000000000000000000000000000000000000000000000000000000000500000", "0x59daa26581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_submitHashrate","params":["0x0000000000000000000000000000000000000000000000000000000000500000", "0x59daa26581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `SUCCESS` - returns true if submitting went through succesfully and false otherwise.

#### BODY

```json
{
  "id": 73,
  "jsonrpc": "2.0",
  "result": true
}
```
