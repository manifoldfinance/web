# network

## /v1/jsonrpc/network

A request using an "HTTP POST-compatible" (state-changing) JSON-RPC method. Use the `/v1/jsonrpc/{network}/methods`
endpoint to get the list of permitted methods. Use the regular Ethereum JSON-RPC format for the POST body.

### POST

`POST https://api.backbonecabal.xyz/v1/jsonrpc/network`

| Parameters |                              |        |
| ---------- | ---------------------------- | ------ |
| Symbol     | Ticker symbol (currency pair | string |

### Request

#### Attributes

| Attributes                         |          |                     |
| ---------------------------------- | -------- | ------------------- |
| `jsonrpc`                          | required | enum                |
| JSON-RPC version                   | `2.0`    | string              |
| `id`                               | required | number              |
|                                    |          | JSON-RPC request ID |
| `method`                           | required | enum                |
| Ethereum JSON-RPC method           |          |                     |
| `eth_sendRawTransaction`           |          | string              |
| `eth_estimateGas`                  |          | string              |
| `eth_submitWork`                   |          | string              |
| `eth_submitHashrate`               |          | string              |
| `params`                           | required | array               |
| JSON-RPC parameters (can be empty) |          |                     |

```
curl --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data-binary "{
  \"jsonrpc\": \"2.0\",
  \"id\": 57386342,
  \"method\": \"eth_submitHashrate\",
  \"params\": []
}" \
'https://api.backbonecabal.xyz/v1/jsonrpc/{network}'
```

### Response

| Attributes       |          |                                         |
| ---------------- | -------- | --------------------------------------- |
| `jsonrpc`        | required | enum                                    |
| JSON-RPC version | `2.0`    | string                                  |
| `id`             | required | number                                  |
|                  |          | JSON-RPC request ID                     |
| `result`         |          | string                                  |
|                  |          | JSON-RPC result (can also be an object) |

#### JSON-RPC Response

`200`

#### HEADERS

`Content-Type:application/json`

#### BODY

```
{
  "jsonrpc": "2.0",
  "id": 4198843
}
```

**JSON Schema**

```
{
  "type": "object",
  "properties": {
    "jsonrpc": {
      "type": "string",
      "description": "JSON-RPC version",
      "enum": [
        "2.0"
      ]
    },
    "id": {
      "type": "integer",
      "description": "JSON-RPC request ID"
    },
    "result": {
      "type": "string",
      "description": "JSON-RPC result (can also be an object)"
    }
  },
  "required": [
    "jsonrpc",
    "id"
  ]
}
```

### Request

| Attributes                         |          |                     |
| ---------------------------------- | -------- | ------------------- |
| `jsonrpc`                          | required | enum                |
| JSON-RPC version                   | `2.0`    | string              |
| `id`                               | required | number              |
|                                    |          | JSON-RPC request ID |
| `method`                           | required | enum                |
| Ethereum JSON-RPC method           |          |                     |
| `eth_sendRawTransaction`           |          | string              |
| `eth_estimateGas`                  |          | string              |
| `eth_submitWork`                   |          | string              |
| `eth_submitHashrate`               |          | string              |
| `params`                           | required | array               |
| JSON-RPC parameters (can be empty) |          |                     |

```
curl --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data-binary "{
  \"jsonrpc\": \"2.0\",
  \"id\": 1260246,
  \"method\": \"eth_submitWork\",
  \"params\": []
}" \
'https://api.backbonecabal.xyz/v1/jsonrpc/{network}'
```

### Response

Bad JSON in POST body or missing Content-Type Headers

`400`

#### HEADERS

`Content-Type:application/JSON`

### Request

| Attributes                         |          |                     |
| ---------------------------------- | -------- | ------------------- |
| `jsonrpc`                          | required | enum                |
| JSON-RPC version                   | `2.0`    | string              |
| `id`                               | required | number              |
|                                    |          | JSON-RPC request ID |
| `method`                           | required | enum                |
| Ethereum JSON-RPC method           |          |                     |
| `eth_sendRawTransaction`           |          | string              |
| `eth_estimateGas`                  |          | string              |
| `eth_submitWork`                   |          | string              |
| `eth_submitHashrate`               |          | string              |
| `params`                           | required | array               |
| JSON-RPC parameters (can be empty) |          |                     |

```
curl --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data-binary "{
  \"jsonrpc\": \"2.0\",
  \"id\": -2521981,
  \"method\": \"eth_estimateGas\",
  \"params\": []
}" \
'https://api.backbonecabal.xyz/v1/jsonrpc/{network}'
```

### Response

JSON-RPC method is not a valid POST method

`404`

### Request

| Attributes                         |          |                     |
| ---------------------------------- | -------- | ------------------- |
| `jsonrpc`                          | required | enum                |
| JSON-RPC version                   | `2.0`    | string              |
| `id`                               | required | number              |
|                                    |          | JSON-RPC request ID |
| `method`                           | required | enum                |
| Ethereum JSON-RPC method           |          |                     |
| `eth_sendRawTransaction`           |          | string              |
| `eth_estimateGas`                  |          | string              |
| `eth_submitWork`                   |          | string              |
| `eth_submitHashrate`               |          | string              |
| `params`                           | required | array               |
| JSON-RPC parameters (can be empty) |          |                     |

```
curl --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data-binary "{
  \"jsonrpc\": \"2.0\",
  \"id\": -50206243,
  \"method\": \"eth_submitWork\",
  \"params\": []
}" \
'https://api.backbonecabal.xyz/v1/jsonrpc/{network}'
```

### Response

Server error

`500`

#### HEADERS

`Content-Type:application/JSON`

### Request

| Attributes                         |          |                     |
| ---------------------------------- | -------- | ------------------- |
| `jsonrpc`                          | required | enum                |
| JSON-RPC version                   | `2.0`    | string              |
| `id`                               | required | number              |
|                                    |          | JSON-RPC request ID |
| `method`                           | required | enum                |
| Ethereum JSON-RPC method           |          |                     |
| `eth_sendRawTransaction`           |          | string              |
| `eth_estimateGas`                  |          | string              |
| `eth_submitWork`                   |          | string              |
| `eth_submitHashrate`               |          | string              |
| `params`                           | required | array               |
| JSON-RPC parameters (can be empty) |          |                     |

```
curl --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data-binary "{
  \"jsonrpc\": \"2.0\",
  \"id\": 23533803,
  \"method\": \"eth_estimateGas\",
  \"params\": []
}" \
'https://api.backbonecabal.xyz/v1/jsonrpc/{network}'
```

### Response

Ethereum client error

`502`

#### HEADERS

`Content-Type:application/JSON`
