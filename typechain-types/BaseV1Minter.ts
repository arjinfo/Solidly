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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BaseV1MinterInterface extends utils.Interface {
  contractName: "BaseV1Minter";
  functions: {
    "_token()": FunctionFragment;
    "_ve()": FunctionFragment;
    "_ve_dist()": FunctionFragment;
    "_voter()": FunctionFragment;
    "active_period()": FunctionFragment;
    "calculate_emission()": FunctionFragment;
    "calculate_growth(uint256)": FunctionFragment;
    "circulating_emission()": FunctionFragment;
    "circulating_supply()": FunctionFragment;
    "initialize(address[],uint256[],uint256)": FunctionFragment;
    "update_period()": FunctionFragment;
    "weekly()": FunctionFragment;
    "weekly_emission()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_token", values?: undefined): string;
  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "_ve_dist", values?: undefined): string;
  encodeFunctionData(functionFragment: "_voter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "active_period",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculate_emission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculate_growth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "circulating_emission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "circulating_supply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update_period",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weekly", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "weekly_emission",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_ve_dist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_voter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "active_period",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculate_emission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculate_growth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circulating_emission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circulating_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "update_period",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weekly", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "weekly_emission",
    data: BytesLike
  ): Result;

  events: {
    "Mint(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}

export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    weekly: BigNumber;
    circulating_supply: BigNumber;
    circulating_emission: BigNumber;
  }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface BaseV1Minter extends BaseContract {
  contractName: "BaseV1Minter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseV1MinterInterface;

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
    _token(overrides?: CallOverrides): Promise<[string]>;

    _ve(overrides?: CallOverrides): Promise<[string]>;

    _ve_dist(overrides?: CallOverrides): Promise<[string]>;

    _voter(overrides?: CallOverrides): Promise<[string]>;

    active_period(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculate_emission(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculate_growth(
      _minted: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    circulating_emission(overrides?: CallOverrides): Promise<[BigNumber]>;

    circulating_supply(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      claimants: string[],
      amounts: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update_period(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weekly(overrides?: CallOverrides): Promise<[BigNumber]>;

    weekly_emission(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _token(overrides?: CallOverrides): Promise<string>;

  _ve(overrides?: CallOverrides): Promise<string>;

  _ve_dist(overrides?: CallOverrides): Promise<string>;

  _voter(overrides?: CallOverrides): Promise<string>;

  active_period(overrides?: CallOverrides): Promise<BigNumber>;

  calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;

  calculate_growth(
    _minted: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;

  circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    claimants: string[],
    amounts: BigNumberish[],
    max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update_period(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weekly(overrides?: CallOverrides): Promise<BigNumber>;

  weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _token(overrides?: CallOverrides): Promise<string>;

    _ve(overrides?: CallOverrides): Promise<string>;

    _ve_dist(overrides?: CallOverrides): Promise<string>;

    _voter(overrides?: CallOverrides): Promise<string>;

    active_period(overrides?: CallOverrides): Promise<BigNumber>;

    calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;

    calculate_growth(
      _minted: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;

    circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      claimants: string[],
      amounts: BigNumberish[],
      max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update_period(overrides?: CallOverrides): Promise<BigNumber>;

    weekly(overrides?: CallOverrides): Promise<BigNumber>;

    weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Mint(address,uint256,uint256,uint256)"(
      sender?: string | null,
      weekly?: null,
      circulating_supply?: null,
      circulating_emission?: null
    ): MintEventFilter;
    Mint(
      sender?: string | null,
      weekly?: null,
      circulating_supply?: null,
      circulating_emission?: null
    ): MintEventFilter;
  };

  estimateGas: {
    _token(overrides?: CallOverrides): Promise<BigNumber>;

    _ve(overrides?: CallOverrides): Promise<BigNumber>;

    _ve_dist(overrides?: CallOverrides): Promise<BigNumber>;

    _voter(overrides?: CallOverrides): Promise<BigNumber>;

    active_period(overrides?: CallOverrides): Promise<BigNumber>;

    calculate_emission(overrides?: CallOverrides): Promise<BigNumber>;

    calculate_growth(
      _minted: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    circulating_emission(overrides?: CallOverrides): Promise<BigNumber>;

    circulating_supply(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      claimants: string[],
      amounts: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update_period(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weekly(overrides?: CallOverrides): Promise<BigNumber>;

    weekly_emission(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _ve_dist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    active_period(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculate_emission(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculate_growth(
      _minted: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circulating_emission(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circulating_supply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      claimants: string[],
      amounts: BigNumberish[],
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update_period(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weekly(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weekly_emission(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}