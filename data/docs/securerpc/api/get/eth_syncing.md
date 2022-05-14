# eth_syncing

## /v1/jsonrpc/:network/eth_syncing

Returns an object with data about the sync status or false.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_syncing`

#### HEADERS

`Content-Type: application/json`

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_syncing

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_syncing","params": [],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_syncing","params": [],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `SYNC STATUS` - a boolean as false **only** when not syncing
- `SYNC BLOCKS` i. `startingBlock` - a hexcode of the integer indicating the block at which the import started (will
  only be reset, after the sync reached his head) ii. `currentBlock` - a hexcode of the integer indicating the current
  block, same as eth_blockNumber iii. `highestBlock` - a hexcode of the integer indicating the highest block

#### BODY

```js
\\ When not syncing
{
    jsonrpc: "2.0",
    id: 1,
    result: "1"
}

\\ When syncing
{
    "id":1,
    "jsonrpc": "2.0",
    "result": {
        startingBlock: '0x384',
        currentBlock: '0x386',
        highestBlock: '0x454'
    }
}
```
