# web3_clientVersion

## /v1/jsonrpc/:network/web3_clientVersion

Returns the current client version.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/web3_clientVersion`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/web3_clientVersion

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `STRING` - The current client version

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Geth/v1.8.6-patched-leveldb-8818ab0b/linux-amd64/go1.9.2"
}
```
