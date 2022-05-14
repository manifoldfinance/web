# full

## /v1/ticker/symbol/full

Get pricing (ticker) data for various currency pairs (fiat, crypto, and tokens) using data from several exchanges. This
endpoint shows the price at various exchanges where the symbol is traded. Use the `/v1/ticker/symbols` endpoint for the
full list of supported symbols.

### GET

`GET https://api.backbonecabal.xyz/v1/ticker/symbol/full`

| Parameters |                              |        |
| ---------- | ---------------------------- | ------ |
| Symbol     | Ticker symbol (currency pair | string |

### Request

```
curl --include \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
  'https://api.backbonecabal.xyz/v1/ticker/{symbol}/full'
```

### Response

| Attributes                           |                     |
| ------------------------------------ | ------------------- |
| `base`                               | string              |
|                                      | Currency pair base  |
| `quote`                              | string              |
|                                      | Currency pair quote |
| `tickers`                            | array               |
| List of tickers at various exchanges |                     |
| `object`                             | 0                   |
| `bid`                                | number              |
| `ask`                                | number              |
| `exchange`                           | string              |
| `volume`                             | number              |
| `timestamp                           | number              |

#### Full ticker Response

`200`

#### HEADERS

`Content-Type:application/json`
