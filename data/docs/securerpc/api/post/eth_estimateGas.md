# eth_estimateGas

## /v1/jsonrpc/:network/eth_estimateGas

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction
will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually
used by the transaction, for a variety of reasons including EVM mechanics and node performance.

### REQUEST

`POST https://api.backbonecabal.xyz/v1/jsonrpc/:network/eth_estimateGas`

#### HEADERS

`Content-Type: application/json`

#### REQUEST PAYLOAD

- `TRANSACTION CALL OBJECT` _[required]_
  - `from`: _[optional]_ 20 Bytes - The address the transaction is sent from.
  - `to`: 20 Bytes - The address the transaction is directed to.
  - `gas`: _[optional]_ Integer of the gas provided for the transaction execution. eth_estimateGas consumes zero gas,
    but this parameter may be needed by some executions.
  - `gasPrice`: _[optional]_ Integer of the gasPrice used for each paid gas
  - `value`: _[optional]_ Integer of the value sent with this transaction
  - `data`: _[optional]_ Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI

If no gas limit is specified geth uses the block gas limit from the pending block as an upper bound. As a result the
returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending
block gas limit.

#### EXAMPLE

```bash
// HTTP POST api.backbonecabal.xyz
curl https://api.backbonecabal.xyz/v1/jsonrpc/mainnet \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}'

// HTTP POST mainnet.backbonecabal.xyz
curl https://mainnet.backbonecabal.xyz/ \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}'

// WEBSOCKETS
>wscat -c wss://mainnet.backbonecabal.xyz/ws
>{"jsonrpc":"2.0","method":"eth_estimateGas","params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x9184e72a","data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}
```

### RESPONSE

#### RESULT FIELDS

- `GAS USED` - the amount of gas used.

#### BODY

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": "0x5cec"
}
```
