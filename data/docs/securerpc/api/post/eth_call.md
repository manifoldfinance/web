# eth_call

## /v1/jsonrpc/:network/eth_call

Executes a new message call immediately without creating a transaction on the block chain.

### REQUEST

`POST https://api.securerpc.com/v1/ethereum/:network/eth_call`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD

- `TRANSACTION CALL OBJECT` _[required]_
  - `from`: _[optional]_ 20 Bytes - The address the transaction is sent from.
  - `to`: 20 Bytes - The address the transaction is directed to.
  - `gas`: _[optional]_ Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this
    parameter may be needed by some executions.
  - `gasPrice`: _[optional]_ Integer of the gasPrice used for each paid gas
  - `value`: _[optional]_ Integer of the value sent with this transaction
  - `data`: _[optional]_ Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI
- `BLOCK PARAMETER` _[required]_ - an integer block number, or the string "latest", "earliest" or "pending", see the
  [default block parameter](https://github.com/ethereum/wiki/wiki/JSON-RPC#the-default-block-parameter)

#### EXAMPLE

```bash
// HTTP POST api.backbonecabal.xyz
curl https://api.securerpc.com/v1/ethereum/mainnet \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}'

// HTTP POST mainnet.backbonecabal.xyz
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_call","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `RETURN VALUE` - the return value of executed contract.

#### BODY

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```
