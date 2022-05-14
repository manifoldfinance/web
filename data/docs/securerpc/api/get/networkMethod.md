# method

## /v1/jsonrpc/network/method

A request using an "HTTP GET-compatible" (non-state-changing) JSON-RPC method. Most Ethereum JSON-RPC methods can be
described in this way, since they query the blockchain for various pieces of information. Use the
`/v1/jsonrpc/{network}/methods` endpoint to get the list of permitted methods.

### GET

`GET https://api.backbonecabal.xyz/v1/jsonrpc/network/method?params=`

| Parameters |                                                                                                                                                                |        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| network    | Ethereum network in lowercase. Possible values: `mainnet`, `ropsten`, `kovan`, `rinkeby`                                                                       | Enum   |
| method     | JSON-RPC method. Use the `/v1/jsonrpc/{network}/methods` endpoint to get the list of permitted methods.                                                        | String |
| params     | This is the params field that would normally be part of the JSON-RPC POST body. Use the exact same format. If it's omitted, it will default to an empty array. | Array  |

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.backbonecabal.xyz/v1/jsonrpc/{network}/{method}?params='
```

### Response

| Attributes                              |          |        |
| --------------------------------------- | -------- | ------ |
| `jsonrpc`                               | required | enum   |
| JSON-RPC version                        | `2.0`    | string |
| `id`                                    | required | number |
| JSON-RPC request ID                     |          |        |
| `result`                                |          | string |
| JSON-RPC result (can also be an object) |          |        |

#### JSON-RPC Response

`200`

#### HEADERS

`Content-Type:application/json`

#### BODY

```
{
  "jsonrpc": "2.0",
  "id": -5294191,
  "result": "sed dolor eu ullamco"
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

### Response

Bad JSON in `params` query parameter

`400`

#### HEADERS

`Content-Type:application/json`

### Response

JSON-RPC method is not a valid GET method

`404`

#### HEADERS

`Content-Type:application/json`

### Response

Server error

`500`

#### HEADERS

`Content-Type:application/json`

### Response

Ethereum client error

`502`

#### HEADERS

`Content-Type:application/json`
