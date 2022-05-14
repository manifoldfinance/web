# eth_getLogs

## /v1/jsonrpc/:network/eth_getLogs

Returns an array of all logs matching a given filter object.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getLogs?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `FILTER OBJECT`
  - `address` _[optional]_ - a string representing the address (20 bytes) to check for balance
  - `fromBlock` _[optional, default is "latest"]_ - an integer block number, or the string "latest", "earliest" or
    "pending"
  - `toBlock` _[optional, default is "latest"]_ - an integer block number, or the string "latest", "earliest" or
    "pending"
  - `topics`_[optional]_ - Array of 32 Bytes DATA topics. Topics are order-dependent.
  - `blockhash`:_[optional, \*\*\_future_\*\*]\_ With the addition of EIP-234, `blockHash` will be a new filter option
    which restricts the logs returned to the single block with the 32-byte hash `blockHash`. Using `blockHash` is
    equivalent to `fromBlock` = `toBlock` = the block number with hash `blockHash`. If `blockHash` is present in in the
    filter criteria, then neither `fromBlock` nor `toBlock` are allowed.

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getLogs --data-urlencode 'params=[{"topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"]}],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getLogs","params": ["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `LOG OBJECTS` - An array of log objects, or an empty array if nothing has changed since last poll.

  - For filters created with `eth_newBlockFilter` the return are block hashes of 32 Bytes), e.g. ["0x3454645634534..."]
  - For filters created with `eth_newPendingTransactionFilter` the return are transaction hashes of 32 Bytes), e.g.
    ["0x6345343454645..."].
  - For filters created with `eth_newFilter` logs are objects with following params:
    - `removed`: true when the log was removed, due to a chain reorganization. false if its a valid log.
    - `logIndex`: integer of the log index position in the block. null when its pending log.
    - `transactionIndex`: integer of the transactions index position log was created from. null when its pending log.
    - `transactionHash`: 32 Bytes - hash of the transactions this log was created from. null when its pending log.
    - `blockHash`: 32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log.
    - `blockNumber`: the block number where this log was in. null when its pending. null when its pending log.
    - `address`: 20 Bytes - address from which this log originated.
    - `data`: contains one or more 32 Bytes non-indexed arguments of the log.
    - `topics`: Array of 0 to 4 32 Bytes of indexed log arguments. (In solidity: The first topic is the hash of the
      signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous
      specifier.)

#### BODY

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0x1a94fce7ef36bc90959e206ba569a12afbc91ca1",
      "topics": ["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"],
      "data": "0x0000000000000000000000003e3310720058c51f0de456e273c626cdd35065700000000000000000000000000000000000000000000000000000000000003185000000000000000000000000000000000000000000000000000000000000318200000000000000000000000000000000000000000000000000000000005c2a23",
      "blockNumber": "0x5c29fb",
      "transactionHash": "0x3dc91b98249fa9f2c5c37486a2427a3a7825be240c1c84961dfb3063d9c04d50",
      "transactionIndex": "0x1d",
      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",
      "logIndex": "0x1d",
      "removed": false
    },
    {
      "address": "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      "topics": ["0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80"],
      "data": "0x00000000000000000000000077ea137625739598666ded665953d26b3d8e374400000000000000000000000000000000000000000000000000000000000749ff00000000000000000000000000000000000000000000000000000000000a749d00000000000000000000000000000000000000000000000000000000005c2a0f",
      "blockNumber": "0x5c29fb",
      "transactionHash": "0x788b1442414cb9c9a36dba2abe250763161a6f6395788a2e808f1b34e92beec1",
      "transactionIndex": "0x54",
      "blockHash": "0x7c5a35e9cb3e8ae0e221ab470abae9d446c3a5626ce6689fc777dcffcab52c70",
      "logIndex": "0x57",
      "removed": false
    }
  ]
}
```
