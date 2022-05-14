# symbol

## /v1/jsonrpc/symbol

Get pricing (ticker) data for various currency pairs (fiat, crypto, and tokens) using data from several exchanges. This
endpoint shows the price at the exchange with the most volume for the symbol. Use the `/v1/ticker/symbols` endpoint for
the full list of supported symbols.

### GET

`GET https://api.backbonecabal.xyz/v1/ticker/symbol`

| Parameters |                               |        |
| ---------- | ----------------------------- | ------ |
| `symbol`   | Ticker symbol (currency pair) | String |

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.backbonecabal.xyz/v1/ticker/{symbol}'
```

### Response

| Attributes      |                                             |
| --------------- | ------------------------------------------- |
| `base`          | string                                      |
|                 | Currency pair base                          |
| `quote`         | string                                      |
|                 | Currency pair quote                         |
| `bid`           | number                                      |
|                 | Bid at the exchange with the most volume    |
| `ask`           | number                                      |
|                 | Ask at the exchange with most volume        |
| `exchange`      | string                                      |
|                 | The exchange with the most volume           |
| `volume`        | number                                      |
|                 | Volume at the exchange with the most volume |
| `num_exchanges` | number                                      |
|                 | Number of exchanges queried                 |
| `total_volume`  | number                                      |
|                 | Total volume across all exchanges queried   |
| `timestamp`     | number                                      |
|                 | Unix timestamp                              |

#### Ticker Response

`200`

#### HEADERS

`Content-Type:application/json`
