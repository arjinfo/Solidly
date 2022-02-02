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

export interface BaseV1VoterInterface extends utils.Interface {
  contractName: "BaseV1Voter";
  functions: {
    "_ve()": FunctionFragment;
    "attachTokenToGauge(uint256,address)": FunctionFragment;
    "bribes(address)": FunctionFragment;
    "claimBribes(address[],address[][],uint256)": FunctionFragment;
    "claimFees(address[],address[][],uint256)": FunctionFragment;
    "claimRewards(address[],address[][])": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "createGauge(address)": FunctionFragment;
    "detachTokenFromGauge(uint256,address)": FunctionFragment;
    "distribute(address[])": FunctionFragment;
    "distributeFees(address[])": FunctionFragment;
    "distro()": FunctionFragment;
    "emitDeposit(uint256,address,uint256)": FunctionFragment;
    "emitWithdraw(uint256,address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "gaugefactory()": FunctionFragment;
    "gauges(address)": FunctionFragment;
    "isGauge(address)": FunctionFragment;
    "length()": FunctionFragment;
    "notifyRewardAmount(uint256)": FunctionFragment;
    "poke(uint256)": FunctionFragment;
    "poolForGauge(address)": FunctionFragment;
    "poolVote(uint256,uint256)": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "reset(uint256)": FunctionFragment;
    "totalWeight()": FunctionFragment;
    "updateAll()": FunctionFragment;
    "updateFor(uint256,uint256)": FunctionFragment;
    "updateGauge(address)": FunctionFragment;
    "usedWeights(uint256)": FunctionFragment;
    "vote(uint256,address[],uint256[])": FunctionFragment;
    "votes(uint256,address)": FunctionFragment;
    "weights(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "attachTokenToGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "bribes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimBribes",
    values: [string[], string[][], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFees",
    values: [string[], string[][], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], string[][]]
  ): string;
  encodeFunctionData(functionFragment: "claimable", values: [string]): string;
  encodeFunctionData(functionFragment: "createGauge", values: [string]): string;
  encodeFunctionData(
    functionFragment: "detachTokenFromGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFees",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "distro", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emitDeposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitWithdraw",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gaugefactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gauges", values: [string]): string;
  encodeFunctionData(functionFragment: "isGauge", values: [string]): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "poke", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "poolForGauge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "reset", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "totalWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "updateAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateFor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "updateGauge", values: [string]): string;
  encodeFunctionData(
    functionFragment: "usedWeights",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "votes",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "weights", values: [string]): string;

  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "attachTokenToGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bribes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimBribes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "detachTokenFromGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distro", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gaugefactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gauges", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGauge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolForGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "votes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weights", data: BytesLike): Result;

  events: {
    "Abstained(uint256,uint256)": EventFragment;
    "Attach(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "Detach(address,address,uint256)": EventFragment;
    "DistributeReward(address,address,uint256)": EventFragment;
    "GaugeCreated(address,address,address,address)": EventFragment;
    "NotifyReward(address,address,uint256)": EventFragment;
    "Voted(address,uint256,uint256)": EventFragment;
    "Withdraw(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Abstained"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Attach"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Detach"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributeReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GaugeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AbstainedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { tokenId: BigNumber; weight: BigNumber }
>;

export type AbstainedEventFilter = TypedEventFilter<AbstainedEvent>;

export type AttachEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; gauge: string; tokenId: BigNumber }
>;

export type AttachEventFilter = TypedEventFilter<AttachEvent>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { lp: string; gauge: string; tokenId: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type DetachEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; gauge: string; tokenId: BigNumber }
>;

export type DetachEventFilter = TypedEventFilter<DetachEvent>;

export type DistributeRewardEvent = TypedEvent<
  [string, string, BigNumber],
  { sender: string; gauge: string; amount: BigNumber }
>;

export type DistributeRewardEventFilter =
  TypedEventFilter<DistributeRewardEvent>;

export type GaugeCreatedEvent = TypedEvent<
  [string, string, string, string],
  { gauge: string; creator: string; bribe: string; pool: string }
>;

export type GaugeCreatedEventFilter = TypedEventFilter<GaugeCreatedEvent>;

export type NotifyRewardEvent = TypedEvent<
  [string, string, BigNumber],
  { sender: string; reward: string; amount: BigNumber }
>;

export type NotifyRewardEventFilter = TypedEventFilter<NotifyRewardEvent>;

export type VotedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { voter: string; tokenId: BigNumber; weight: BigNumber }
>;

export type VotedEventFilter = TypedEventFilter<VotedEvent>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { lp: string; gauge: string; tokenId: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface BaseV1Voter extends BaseContract {
  contractName: "BaseV1Voter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseV1VoterInterface;

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
    _ve(overrides?: CallOverrides): Promise<[string]>;

    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bribes(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    claimBribes(
      _bribes: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFees(
      _fees: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      _gauges: string[],
      _tokens: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    createGauge(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute(address)"(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute(uint256,uint256)"(
      start: BigNumberish,
      finish: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeFees(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distro(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    gaugefactory(overrides?: CallOverrides): Promise<[string]>;

    gauges(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    isGauge(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poke(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poolForGauge(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    poolVote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    reset(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalWeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateFor(uint256,uint256)"(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateFor(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGauge(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usedWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vote(
      tokenId: BigNumberish,
      _poolVote: string[],
      _weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    votes(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    weights(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _ve(overrides?: CallOverrides): Promise<string>;

  attachTokenToGauge(
    tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bribes(arg0: string, overrides?: CallOverrides): Promise<string>;

  claimBribes(
    _bribes: string[],
    _tokens: string[][],
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFees(
    _fees: string[],
    _tokens: string[][],
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    _gauges: string[],
    _tokens: string[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  createGauge(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  detachTokenFromGauge(
    tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute(address[])"(
    _gauges: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute(address)"(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute(uint256,uint256)"(
    start: BigNumberish,
    finish: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeFees(
    _gauges: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distro(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emitDeposit(
    tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emitWithdraw(
    tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  gaugefactory(overrides?: CallOverrides): Promise<string>;

  gauges(arg0: string, overrides?: CallOverrides): Promise<string>;

  isGauge(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poke(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poolForGauge(arg0: string, overrides?: CallOverrides): Promise<string>;

  poolVote(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  reset(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalWeight(overrides?: CallOverrides): Promise<BigNumber>;

  updateAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateFor(uint256,uint256)"(
    start: BigNumberish,
    end: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateFor(address[])"(
    _gauges: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGauge(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usedWeights(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vote(
    tokenId: BigNumberish,
    _poolVote: string[],
    _weights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  votes(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _ve(overrides?: CallOverrides): Promise<string>;

    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bribes(arg0: string, overrides?: CallOverrides): Promise<string>;

    claimBribes(
      _bribes: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimFees(
      _fees: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(
      _gauges: string[],
      _tokens: string[][],
      overrides?: CallOverrides
    ): Promise<void>;

    claimable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    createGauge(_pool: string, overrides?: CallOverrides): Promise<string>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute(address[])"(
      _gauges: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute(address)"(
      _gauge: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute(uint256,uint256)"(
      start: BigNumberish,
      finish: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute()"(overrides?: CallOverrides): Promise<void>;

    distributeFees(_gauges: string[], overrides?: CallOverrides): Promise<void>;

    distro(overrides?: CallOverrides): Promise<void>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    gaugefactory(overrides?: CallOverrides): Promise<string>;

    gauges(arg0: string, overrides?: CallOverrides): Promise<string>;

    isGauge(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    poke(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    poolForGauge(arg0: string, overrides?: CallOverrides): Promise<string>;

    poolVote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    reset(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    totalWeight(overrides?: CallOverrides): Promise<BigNumber>;

    updateAll(overrides?: CallOverrides): Promise<void>;

    "updateFor(uint256,uint256)"(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateFor(address[])"(
      _gauges: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateGauge(_gauge: string, overrides?: CallOverrides): Promise<void>;

    usedWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      tokenId: BigNumberish,
      _poolVote: string[],
      _weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    votes(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Abstained(uint256,uint256)"(
      tokenId?: null,
      weight?: null
    ): AbstainedEventFilter;
    Abstained(tokenId?: null, weight?: null): AbstainedEventFilter;

    "Attach(address,address,uint256)"(
      owner?: string | null,
      gauge?: string | null,
      tokenId?: null
    ): AttachEventFilter;
    Attach(
      owner?: string | null,
      gauge?: string | null,
      tokenId?: null
    ): AttachEventFilter;

    "Deposit(address,address,uint256,uint256)"(
      lp?: string | null,
      gauge?: string | null,
      tokenId?: null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      lp?: string | null,
      gauge?: string | null,
      tokenId?: null,
      amount?: null
    ): DepositEventFilter;

    "Detach(address,address,uint256)"(
      owner?: string | null,
      gauge?: string | null,
      tokenId?: null
    ): DetachEventFilter;
    Detach(
      owner?: string | null,
      gauge?: string | null,
      tokenId?: null
    ): DetachEventFilter;

    "DistributeReward(address,address,uint256)"(
      sender?: string | null,
      gauge?: string | null,
      amount?: null
    ): DistributeRewardEventFilter;
    DistributeReward(
      sender?: string | null,
      gauge?: string | null,
      amount?: null
    ): DistributeRewardEventFilter;

    "GaugeCreated(address,address,address,address)"(
      gauge?: string | null,
      creator?: null,
      bribe?: string | null,
      pool?: string | null
    ): GaugeCreatedEventFilter;
    GaugeCreated(
      gauge?: string | null,
      creator?: null,
      bribe?: string | null,
      pool?: string | null
    ): GaugeCreatedEventFilter;

    "NotifyReward(address,address,uint256)"(
      sender?: string | null,
      reward?: string | null,
      amount?: null
    ): NotifyRewardEventFilter;
    NotifyReward(
      sender?: string | null,
      reward?: string | null,
      amount?: null
    ): NotifyRewardEventFilter;

    "Voted(address,uint256,uint256)"(
      voter?: string | null,
      tokenId?: null,
      weight?: null
    ): VotedEventFilter;
    Voted(
      voter?: string | null,
      tokenId?: null,
      weight?: null
    ): VotedEventFilter;

    "Withdraw(address,address,uint256,uint256)"(
      lp?: string | null,
      gauge?: string | null,
      tokenId?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      lp?: string | null,
      gauge?: string | null,
      tokenId?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    _ve(overrides?: CallOverrides): Promise<BigNumber>;

    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bribes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimBribes(
      _bribes: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFees(
      _fees: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      _gauges: string[],
      _tokens: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    createGauge(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute(address)"(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute(uint256,uint256)"(
      start: BigNumberish,
      finish: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeFees(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distro(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    gaugefactory(overrides?: CallOverrides): Promise<BigNumber>;

    gauges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGauge(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poke(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poolForGauge(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    poolVote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    reset(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalWeight(overrides?: CallOverrides): Promise<BigNumber>;

    updateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateFor(uint256,uint256)"(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateFor(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGauge(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usedWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      tokenId: BigNumberish,
      _poolVote: string[],
      _weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    votes(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bribes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimBribes(
      _bribes: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFees(
      _fees: string[],
      _tokens: string[][],
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      _gauges: string[],
      _tokens: string[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createGauge(
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute(address)"(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute(uint256,uint256)"(
      start: BigNumberish,
      finish: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeFees(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distro(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gaugefactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gauges(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGauge(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poke(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poolForGauge(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolVote(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reset(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateFor(uint256,uint256)"(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateFor(address[])"(
      _gauges: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGauge(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usedWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      tokenId: BigNumberish,
      _poolVote: string[],
      _weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    votes(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weights(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
