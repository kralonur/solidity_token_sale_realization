/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "banAccount(address)": FunctionFragment;
    "buyFromSale()": FunctionFragment;
    "cancelOrder(uint256)": FunctionFragment;
    "createOrder(uint256,uint256)": FunctionFragment;
    "createSale()": FunctionFragment;
    "createTrade()": FunctionFragment;
    "fillOrder(uint256,uint256)": FunctionFragment;
    "finishSale()": FunctionFragment;
    "finishTrade()": FunctionFragment;
    "getAccountState(address)": FunctionFragment;
    "getOrderDetail(uint256)": FunctionFragment;
    "getSaleDetail(uint256)": FunctionFragment;
    "getTradeDetail(uint256)": FunctionFragment;
    "orders(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "register()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "round()": FunctionFragment;
    "roundLength()": FunctionFragment;
    "startSale()": FunctionFragment;
    "startTrade()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "banAccount", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buyFromSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createTrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillOrder",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finishSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finishTrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderDetail",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleDetail",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeDetail",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "register", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "round", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "roundLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startSale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startTrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "banAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyFromSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fillOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finishSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "round", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roundLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startTrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BoughtFromSale(uint256,address,uint256)": EventFragment;
    "OrderCanceled(uint256)": EventFragment;
    "OrderCreated(address,uint256,uint256,uint256)": EventFragment;
    "OrderFilled(uint256,uint256,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SaleCreated(uint256,uint256,uint256)": EventFragment;
    "SaleFinished(uint256)": EventFragment;
    "SaleStarted(uint256)": EventFragment;
    "TradeCreated(uint256)": EventFragment;
    "TradeFinished(uint256,uint256)": EventFragment;
    "TradeStarted(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BoughtFromSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeStarted"): EventFragment;
}

export type BoughtFromSaleEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { round: BigNumber; buyerAddress: string; amount: BigNumber }
>;

export type BoughtFromSaleEventFilter = TypedEventFilter<BoughtFromSaleEvent>;

export type OrderCanceledEvent = TypedEvent<
  [BigNumber],
  { orderIndex: BigNumber }
>;

export type OrderCanceledEventFilter = TypedEventFilter<OrderCanceledEvent>;

export type OrderCreatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    sellerAddress: string;
    orderIndex: BigNumber;
    amount: BigNumber;
    price: BigNumber;
  }
>;

export type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;

export type OrderFilledEvent = TypedEvent<
  [BigNumber, BigNumber, boolean],
  { orderIndex: BigNumber; amount: BigNumber; orderClosed: boolean }
>;

export type OrderFilledEventFilter = TypedEventFilter<OrderFilledEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type SaleCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { round: BigNumber; tokenPrice: BigNumber; allowedSellAmount: BigNumber }
>;

export type SaleCreatedEventFilter = TypedEventFilter<SaleCreatedEvent>;

export type SaleFinishedEvent = TypedEvent<[BigNumber], { round: BigNumber }>;

export type SaleFinishedEventFilter = TypedEventFilter<SaleFinishedEvent>;

export type SaleStartedEvent = TypedEvent<[BigNumber], { round: BigNumber }>;

export type SaleStartedEventFilter = TypedEventFilter<SaleStartedEvent>;

export type TradeCreatedEvent = TypedEvent<[BigNumber], { round: BigNumber }>;

export type TradeCreatedEventFilter = TypedEventFilter<TradeCreatedEvent>;

export type TradeFinishedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { round: BigNumber; tradeVolume: BigNumber }
>;

export type TradeFinishedEventFilter = TypedEventFilter<TradeFinishedEvent>;

export type TradeStartedEvent = TypedEvent<[BigNumber], { round: BigNumber }>;

export type TradeStartedEventFilter = TypedEventFilter<TradeStartedEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    banAccount(
      addressToBan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyFromSale(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      orderIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fillOrder(
      orderIndex: BigNumberish,
      tokenAmountToBuy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountState(
      account: string,
      overrides?: CallOverrides
    ): Promise<[number] & { state: number }>;

    getOrderDetail(
      orderIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        amount: BigNumber;
        price: BigNumber;
        seller: string;
      }
    >;

    getSaleDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        createdAt: BigNumber;
        allowedSellAmount: BigNumber;
        totalSoldAmount: BigNumber;
        tokenPrice: BigNumber;
        state: number;
      }
    >;

    getTradeDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        createdAt: BigNumber;
        totalTradedAmount: BigNumber;
        state: number;
      }
    >;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        amount: BigNumber;
        price: BigNumber;
        seller: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "register()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "register(address)"(
      referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    round(overrides?: CallOverrides): Promise<[BigNumber]>;

    roundLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  banAccount(
    addressToBan: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyFromSale(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    orderIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    amount: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createSale(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fillOrder(
    orderIndex: BigNumberish,
    tokenAmountToBuy: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishSale(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishTrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountState(account: string, overrides?: CallOverrides): Promise<number>;

  getOrderDetail(
    orderIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      amount: BigNumber;
      price: BigNumber;
      seller: string;
    }
  >;

  getSaleDetail(
    saleRound: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, number] & {
      createdAt: BigNumber;
      allowedSellAmount: BigNumber;
      totalSoldAmount: BigNumber;
      tokenPrice: BigNumber;
      state: number;
    }
  >;

  getTradeDetail(
    saleRound: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number] & {
      createdAt: BigNumber;
      totalTradedAmount: BigNumber;
      state: number;
    }
  >;

  orders(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      amount: BigNumber;
      price: BigNumber;
      seller: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  "register()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "register(address)"(
    referral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  round(overrides?: CallOverrides): Promise<BigNumber>;

  roundLength(overrides?: CallOverrides): Promise<BigNumber>;

  startSale(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTrade(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    banAccount(addressToBan: string, overrides?: CallOverrides): Promise<void>;

    buyFromSale(overrides?: CallOverrides): Promise<void>;

    cancelOrder(
      orderIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createSale(overrides?: CallOverrides): Promise<void>;

    createTrade(overrides?: CallOverrides): Promise<void>;

    fillOrder(
      orderIndex: BigNumberish,
      tokenAmountToBuy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finishSale(overrides?: CallOverrides): Promise<void>;

    finishTrade(overrides?: CallOverrides): Promise<void>;

    getAccountState(
      account: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getOrderDetail(
      orderIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        amount: BigNumber;
        price: BigNumber;
        seller: string;
      }
    >;

    getSaleDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        createdAt: BigNumber;
        allowedSellAmount: BigNumber;
        totalSoldAmount: BigNumber;
        tokenPrice: BigNumber;
        state: number;
      }
    >;

    getTradeDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        createdAt: BigNumber;
        totalTradedAmount: BigNumber;
        state: number;
      }
    >;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        amount: BigNumber;
        price: BigNumber;
        seller: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "register()"(overrides?: CallOverrides): Promise<void>;

    "register(address)"(
      referral: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    round(overrides?: CallOverrides): Promise<BigNumber>;

    roundLength(overrides?: CallOverrides): Promise<BigNumber>;

    startSale(overrides?: CallOverrides): Promise<void>;

    startTrade(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BoughtFromSale(uint256,address,uint256)"(
      round?: null,
      buyerAddress?: string | null,
      amount?: null
    ): BoughtFromSaleEventFilter;
    BoughtFromSale(
      round?: null,
      buyerAddress?: string | null,
      amount?: null
    ): BoughtFromSaleEventFilter;

    "OrderCanceled(uint256)"(orderIndex?: null): OrderCanceledEventFilter;
    OrderCanceled(orderIndex?: null): OrderCanceledEventFilter;

    "OrderCreated(address,uint256,uint256,uint256)"(
      sellerAddress?: string | null,
      orderIndex?: null,
      amount?: null,
      price?: null
    ): OrderCreatedEventFilter;
    OrderCreated(
      sellerAddress?: string | null,
      orderIndex?: null,
      amount?: null,
      price?: null
    ): OrderCreatedEventFilter;

    "OrderFilled(uint256,uint256,bool)"(
      orderIndex?: null,
      amount?: null,
      orderClosed?: null
    ): OrderFilledEventFilter;
    OrderFilled(
      orderIndex?: null,
      amount?: null,
      orderClosed?: null
    ): OrderFilledEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SaleCreated(uint256,uint256,uint256)"(
      round?: null,
      tokenPrice?: null,
      allowedSellAmount?: null
    ): SaleCreatedEventFilter;
    SaleCreated(
      round?: null,
      tokenPrice?: null,
      allowedSellAmount?: null
    ): SaleCreatedEventFilter;

    "SaleFinished(uint256)"(round?: null): SaleFinishedEventFilter;
    SaleFinished(round?: null): SaleFinishedEventFilter;

    "SaleStarted(uint256)"(round?: null): SaleStartedEventFilter;
    SaleStarted(round?: null): SaleStartedEventFilter;

    "TradeCreated(uint256)"(round?: null): TradeCreatedEventFilter;
    TradeCreated(round?: null): TradeCreatedEventFilter;

    "TradeFinished(uint256,uint256)"(
      round?: null,
      tradeVolume?: null
    ): TradeFinishedEventFilter;
    TradeFinished(round?: null, tradeVolume?: null): TradeFinishedEventFilter;

    "TradeStarted(uint256)"(round?: null): TradeStartedEventFilter;
    TradeStarted(round?: null): TradeStartedEventFilter;
  };

  estimateGas: {
    banAccount(
      addressToBan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyFromSale(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      orderIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createOrder(
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fillOrder(
      orderIndex: BigNumberish,
      tokenAmountToBuy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountState(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderDetail(
      orderIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradeDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "register()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "register(address)"(
      referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    round(overrides?: CallOverrides): Promise<BigNumber>;

    roundLength(overrides?: CallOverrides): Promise<BigNumber>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    banAccount(
      addressToBan: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyFromSale(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      orderIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fillOrder(
      orderIndex: BigNumberish,
      tokenAmountToBuy: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountState(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderDetail(
      orderIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSaleDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTradeDetail(
      saleRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "register()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "register(address)"(
      referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    round(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roundLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTrade(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
