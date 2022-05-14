# eth_getTransactionByHash

## /v1/jsonrpc/:network/eth_getTransactionByHash

Returns information about a transaction for a given hash.

### REQUEST

`GET https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_getTransactionByHash?params=:paramsJSONArray`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PARAMS

- `TRANSACTION HASH` _[required]_ - a string representing the hash (32 bytes) of a transaction

#### EXAMPLE

```bash
// HTTP GET
curl -G https://api.backbonecabal.xyz/v1/jsonrpc/mainnet/eth_getTransactionByHash --data-urlencode 'params=["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"]'

// HTTP POST
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params": ["0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `TRANSACTION` - A transaction object, or null when no transaction was found
  - `hash`: 32 Bytes - hash of the transaction.
  - `nonce`: the number of transactions made by the sender prior to this one.
  - `blockHash`: 32 Bytes - hash of the block where this transaction was in. null when its pending.
  - `blockNumber`: block number where this transaction was in. null when its pending.
  - `transactionIndex`: integer of the transactions index position in the block. null when its pending.
  - `from`: 20 Bytes - address of the sender.
  - `to`: 20 Bytes - address of the receiver. null when its a contract creation transaction.
  - `value`: value transferred in Wei.
  - `gasPrice`: gas price provided by the sender in Wei.
  - `gas`: gas provided by the sender.
  - `input`: the data send along with the transaction.

#### BODY

```js
{
    jsonrpc: "2.0",
    id: 1,
    result: {
        blockHash: "0xb3b20624f8f0f86eb50dd04688409e5cea4bd02d700bf6e79e9384d47d6a5a35",
        blockNumber: "0x5bad55",
        from: "0x398137383b3d25c92898c656696e41950e47316b",
        gas: "0x1d45e",
        gasPrice: "0xfa56ea00",
        hash: "0xbb3a336e3f823ec18197f1e13ee875700f08f03e2cab75f0d0b118dabb44cba0",
        input: "0xf7d8c88300000000000000000000000000000000000000000000000000000000000cee6100000000000000000000000000000000000000000000000000000000000ac3e1",
        nonce: "0x18",
        to: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
        transactionIndex: "0x11",
        value: "0x1c6bf526340000",
        v: "0x25",
        r: "0x2a378831cf81d99a3f06a18ae1b6ca366817ab4d88a70053c41d7a8f0368e031",
        s: "0x450d831a05b6e418724436c05c155e0a1b7b921015d0fbc2f667aed709ac4fb5"
    }
}
```
