# eth_getTransactionReceipt

## /v1/jsonrpc/:network/eth_getTransactionReceipt

Returns the receipt of a transaction by transaction hash. **Note** that the receipt is not available for pending
transactions.

### REQUEST

`GET https://api.securerpc.com/v1/ethereum/:network/eth_getTransactionReceipt?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `TRANSACTION HASH` _[required]_ - a string representing the hash (32 bytes) of a transaction

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.securerpc.com/v1/ethereum/mainnet/eth_getTransactionReceipt --data-urlencode 'params=["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `TRANSACTION RECEIPT` - A transaction receipt object, or null when no receipt was found:
  - `transactionHash`: 32 Bytes - hash of the transaction.
  - `transactionIndex`: integer of the transactions index position in the block.
  - `blockHash`: 32 Bytes - hash of the block where this transaction was in.
  - `blockNumber`: block number where this transaction was in.
  - `from`: 20 Bytes - address of the sender.
  - `to`: 20 Bytes - address of the receiver. null when its a contract creation transaction.
  - `cumulativeGasUsed`: the total amount of gas used when this transaction was executed in the block.
  - `gasUsed`: the amount of gas used by this specific transaction alone.
  - `contractAddress`: 20 Bytes - the contract address created, if the transaction was a contract creation, otherwise -
    null.
  - `logs`: Array - Array of log objects, which this transaction generated.
  - `logsBloom`: 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns _either_: - `root` : 32 bytes of post-transaction stateroot (pre Byzantium) - `status`: either 1
(success) or 0 (failure)

#### BODY

```js
{
"id":1,
"jsonrpc":"2.0",
"result": {
     transactionHash: '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238',
     transactionIndex:  '0x1', // 1
     blockNumber: '0xb', // 11
     blockHash: '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
     cumulativeGasUsed: '0x33bc', // 13244
     gasUsed: '0x4dc', // 1244
     contractAddress: '0xb60e8dd61c5d32be8058bb8eb970870f07233155', // or null, if none was created
     logs: [{
         // logs as returned by getFilterLogs, etc.
     }, ...],
     logsBloom: "0x00...0", // 256 byte bloom filter
     status: '0x1'
  }
}
```
