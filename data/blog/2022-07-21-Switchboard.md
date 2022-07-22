---
title: SwitchBoard
publishedAt: '2022-07-21'
description: SwitchBoard V01.beta
by: sambacha
type: changelog
---

# SwitchBoard v1.beta

Switchboard is an on-chain protocol to help facilitate best-execution trades. We define best-execution as the liquidity adjust arrival price of the submitted trade payload. 

## How Trading Works

> Payload Execution

Pre-trade Request: The client submits a request to the `/trade/peek` API Endpoint. Our backend then utilizes our routing solver to derive the best liquidity adjusted execution pathway. To execute the request we return a response to the client that contains a singable transaction payload consisting of orders that must be settled on chain.


Post-trade Execution: Payload returned by TinesV2 and sends it to the Ethereum Network. The protocol translates the payload into a set of 'chunks', that execute on the involved trading venues. The contracts execute transfers and the payload execution is finalized. 

> Think of 'chunks' as you would in a bin packing problem

### Wards

> A Ward is responsible for all implementation specific logic required by each venue.

All initiating functions must be handled and authorized from these modules. A Ward is a namespace for an `Exchange Venue`. Wards enable us to separate the logic specific to each venue without polluting the entire protocol with venue-specific implementation details.

This could range from depositing funds prior to initiating a trade to wrapping or unwrapping ether as required. It is a key requirement that we keep DEX logic separate from the primary contract in order to allow for the expansion of the platform.

### Supported Exchanges

| **Venue** 	| **Ward** 	|
|---	|---	|
| UniswapV02 	| YE 	|
| UniswapV03 	| YES 	|
| SushiswapV01 	| VIA Router 	|
| SushiswapX 	| N/A 	|
| BalancerV01 	| YES 	|
| ZeroEx/0xV01 	| YES 	|
| ZeroEx/0xV03 	| YES 	|
| StableSwap/Curve 	| YES 	|
| Bancor 	| N/A 	|
| Zapper 	| N/A 	|


## SwitchBoard

The `SwitchBoard` sequences each token trade: executing all orders using their respective Ward.


This contract is the entry point for external transactions and performs sanity checks on the payload Due to the differing requirements of executing trades at each DEX, we employ the use of separate Ward contracts.

## Diagram

<pre>

switchboard:
    │├──╮──── ward ─────╭──┤│
        │               │
        ╰─── module ────╯
        │               │
        ╰──── asset ────╯
        │               │
        ╰── "payload" ──╯

Protocol:
    │├── AreciboPrimary ──╭─────────────────────────╮──┤│
                          │                         │
                          ╰──╮────── ward ───────╭──╯
                             │                   │
                             ╰───── kernel ──────╯
                             │                   │
                             ╰── "SwitchBoard" ──╯

Payload:
    │├──╮────────── ">" ──╭── Wards ──╮── ">" ──────────╭──┤│
        │                 │           │                 │
        │                 ╰─────<─────╯                 │
        │                                               │
        ╰── "<" ── SwitchBoard ──╭────────────╮── "<" ──╯
                                 │            │
                                 ╰── Router ──╯

</pre>

### Router

> Router Types

| **Pattern** | **Number of Msgs Consumed** | **Number of Msgs Published** | **Stateful?** | **Comment**                        |
| ----------- | --------------------------- | ---------------------------- | ------------- | ---------------------------------- |
| Splitter    | 1                           | multiple                     | No            |                                    |
| Aggregator  | multiple                    | 1                            | Yes           |                                    |
| Resequencer | multiple                    | multiple                     | Yes           | Publishes same number it consumes. |



### performOrder

```solidity
function performOrder(bytes genericPayload, uint256 availableToSpend, uint256 targetAmount) external payable returns (uint256 amountSpentOnOrder, uint256 amountReceivedFromOrder)
```

_Fills the input order._

#### Parameters

| Name             | Type    | Description                                                                                             |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| genericPayload   | bytes   | Encoded data for this order. This is specific to exchange and is done by encoding a per-exchange struct |
| availableToSpend | uint256 | The amount of assets that are available for the ward to spend.                                          |
| targetAmount     | uint256 | The target for amount of assets to spend - it may spend less than this and return the change.           |

#### Returns

| Name                    | Type    | Description                                               |
| ----------------------- | ------- | --------------------------------------------------------- |
| amountSpentOnOrder      | uint256 | The amount of source asset spent on this order.           |
| amountReceivedFromOrder | uint256 | The amount of destination asset received from this order. |


## UniswapV02


### performOrder

```solidity
function performOrder(bytes genericPayload, uint256 availableToSpend, uint256 targetAmount) external payable returns (uint256 amountSpentOnOrder, uint256 amountReceivedFromOrder)
```

_Fills the input order._

#### Parameters

| Name             | Type    | Description                                                                                             |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| genericPayload   | bytes   | Encoded data for this order. This is specific to exchange and is done by encoding a per-exchange struct |
| availableToSpend | uint256 | The amount of assets that are available for the ward to spend.                                          |
| targetAmount     | uint256 | The target for amount of assets to spend - it may spend less than this and return the change.           |

#### Returns

| Name                    | Type    | Description                                               |
| ----------------------- | ------- | --------------------------------------------------------- |
| amountSpentOnOrder      | uint256 | The amount of source asset spent on this order.           |
| amountReceivedFromOrder | uint256 | The amount of destination asset received from this order. |


# StableSwap

## Methods

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| owner   | address | undefined   |
| spender | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```

_Sets `amount` as the allowance of `spender` over the caller&#39;s tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender&#39;s allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| spender | address | undefined   |
| amount  | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_Returns the amount of tokens owned by `account`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### exchange

```solidity
function exchange(int128 sourceAssetId, int128 destinationAssetId, uint256 sourceAmount, uint256 minimumDestinationAmount) external nonpayable
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| sourceAssetId            | int128  | undefined   |
| destinationAssetId       | int128  | undefined   |
| sourceAmount             | uint256 | undefined   |
| minimumDestinationAmount | uint256 | undefined   |

### exchange_underlying

```solidity
function exchange_underlying(int128 sourceAssetId, int128 destinationAssetId, uint256 sourceAmount, uint256 minimumDestinationAmount, uint256 deadline) external nonpayable
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| sourceAssetId            | int128  | undefined   |
| destinationAssetId       | int128  | undefined   |
| sourceAmount             | uint256 | undefined   |
| minimumDestinationAmount | uint256 | undefined   |
| deadline                 | uint256 | undefined   |

### exchange_underlying

```solidity
function exchange_underlying(int128 sourceAssetId, int128 destinationAssetId, uint256 sourceAmount, uint256 minimumDestinationAmount) external nonpayable
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| sourceAssetId            | int128  | undefined   |
| destinationAssetId       | int128  | undefined   |
| sourceAmount             | uint256 | undefined   |
| minimumDestinationAmount | uint256 | undefined   |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Returns the amount of tokens in existence._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```

_Moves `amount` tokens from the caller&#39;s account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| to     | address | undefined   |
| amount | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```

_Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller&#39;s allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| from   | address | undefined   |
| to     | address | undefined   |
| amount | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| owner `indexed`   | address | undefined   |
| spender `indexed` | address | undefined   |
| value             | uint256 | undefined   |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| from `indexed` | address | undefined   |
| to `indexed`   | address | undefined   |
| value          | uint256 | undefined   |



## Reference

| Parameter | Description |
| :--- | :--- |
| Address | Address of the token, checksummed |
| Symbol | Symbol of the token Alpha Numeric only |
| decimals | Number of decimals the token has |
| Fee Details | in basis points, currently set to 2 |
| Parameter | The percentage being used to calculate the fee amount |
| %Percentage | The fee amount denoted in the fee. Asset token |
| #Number/amount | Token details of the token which the fee is denoted in |
````
