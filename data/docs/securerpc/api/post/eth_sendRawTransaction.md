# eth_sendRawTransaction

## /v1/jsonrpc/:network/eth_sendRawTransaction

Creates new message call transaction or a contract creation for signed transactions.

### REQUEST

`POST https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_sendRawTransaction`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD

- `TRANSACTION DATA` _[required]_ - The signed transaction data.

#### EXAMPLE

```bash
// HTTP POST api.backbonecabal.xyz
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}'

// HTTP POST mainnet.backbonecabal.xyz
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `TRANSACTION HASH` - 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available

NOTE - Use `eth_getTransactionReceipt` to get the contract address, after the transaction was mined, when you created a
contract.

#### BODY

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```
