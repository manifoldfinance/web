# methods

## /v1/jsonrpc/network/methods

The JSON-RPC methods supported by the `/v1/jsonrpc/{network}/{method}` (GET) and `/v1/jsonrpc/{network}` (POST)
endpoints.

### GET

`GET https://api.backbonecabal.xyz/v1/jsonrpc/network/methods`

### Parameters

| Attributes |                                                                                          |      |
| ---------- | ---------------------------------------------------------------------------------------- | ---- |
| network    | Ethereum network in lowercase. Possible values: `mainnet`, `ropsten`, `kovan`, `rinkeby` | enum |

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.backbonecabal.xyz/v1/jsonrpc/{network}/methods'
```

### Response

| Attributes                                                                       |          |       |
| -------------------------------------------------------------------------------- | -------- | ----- |
| `get`                                                                            | required | array |
| List of methods supported by the `/v1/jsonrpc/{network}/{method}` endpoint (GET) | `string` | 0     |
| `post`                                                                           | required | array |
| List of methods supported by the `/v1/jsonrpc/{network}` endpoint (POST)         | `string` | 0     |

#### Methods Response

`200`

#### HEADERS

`Content-Type:application/json`

#### BODY

```
{
  "get": [
    "culpa ipsum sunt dolor",
    "labore in",
    "sunt pariatur eiusmod",
    "nostrud mollit"
  ],
  "post": [
    "aute aliqua elit",
    "eu tempor nulla Excepteur eiusmod",
    "ipsum et officia laborum"
  ]
}
```

**JSON Schema**

```
{
  "type": "object",
  "properties": {
    "get": {
      "type": "array",
      "description": "List of methods supported by the /v1/jsonrpc/{network}/{method} endpoint (GET)",
      "items": {
        "type": "string"
      }
    },
    "post": {
      "type": "array",
      "description": "List of methods supported by the /v1/jsonrpc/{network} endpoint (POST)",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "get",
    "post"
  ]
}
```

### Response

Server error

`500`

#### HEADERS

`Content-Type:application/json`
