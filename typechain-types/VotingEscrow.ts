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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace VotingEscrow {
  export type PointStruct = {
    bias: BigNumberish;
    slope: BigNumberish;
    ts: BigNumberish;
    blk: BigNumberish;
  };

  export type PointStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & { bias: BigNumber; slope: BigNumber; ts: BigNumber; blk: BigNumber };
}

export interface VotingEscrowInterface extends utils.Interface {
  contractName: "VotingEscrow";
  functions: {
    "checkpoint()": FunctionFragment;
    "deposit_for(uint256,uint256)": FunctionFragment;
    "epoch()": FunctionFragment;
    "point_history(uint256)": FunctionFragment;
    "user_point_epoch(uint256)": FunctionFragment;
    "user_point_history(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit_for",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "point_history",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_epoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_history",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_epoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_history",
    data: BytesLike
  ): Result;

  events: {};
}

export interface VotingEscrow extends BaseContract {
  contractName: "VotingEscrow";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingEscrowInterface;

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
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VotingEscrow.PointStructOutput]>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[VotingEscrow.PointStructOutput]>;
  };

  checkpoint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit_for(
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  point_history(
    loc: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VotingEscrow.PointStructOutput>;

  user_point_epoch(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  user_point_history(
    tokenId: BigNumberish,
    loc: BigNumberish,
    overrides?: CallOverrides
  ): Promise<VotingEscrow.PointStructOutput>;

  callStatic: {
    checkpoint(overrides?: CallOverrides): Promise<void>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VotingEscrow.PointStructOutput>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<VotingEscrow.PointStructOutput>;
  };

  filters: {};

  estimateGas: {
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
