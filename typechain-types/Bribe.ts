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

export interface BribeInterface extends utils.Interface {
  contractName: "Bribe";
  functions: {
    "DURATION()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "_deposit(uint256,uint256)": FunctionFragment;
    "_ve()": FunctionFragment;
    "_withdraw(uint256,uint256)": FunctionFragment;
    "balanceOf(uint256)": FunctionFragment;
    "batchRewardPerToken(address,uint256)": FunctionFragment;
    "batchUserRewards(address,uint256,uint256)": FunctionFragment;
    "checkpoints(uint256,uint256)": FunctionFragment;
    "earned(address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getPriorBalanceIndex(uint256,uint256)": FunctionFragment;
    "getPriorRewardPerToken(address,uint256)": FunctionFragment;
    "getPriorSupplyIndex(uint256)": FunctionFragment;
    "getReward(uint256,address[])": FunctionFragment;
    "getRewardForOwner(uint256,address[])": FunctionFragment;
    "isReward(address)": FunctionFragment;
    "lastEarn(address,uint256)": FunctionFragment;
    "lastTimeRewardApplicable(address)": FunctionFragment;
    "lastUpdateTime(address)": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "numCheckpoints(uint256)": FunctionFragment;
    "periodFinish(address)": FunctionFragment;
    "rewardPerToken(address)": FunctionFragment;
    "rewardPerTokenCheckpoints(address,uint256)": FunctionFragment;
    "rewardPerTokenNumCheckpoints(address)": FunctionFragment;
    "rewardPerTokenStored(address)": FunctionFragment;
    "rewardRate(address)": FunctionFragment;
    "rewards(uint256)": FunctionFragment;
    "rewardsListLength()": FunctionFragment;
    "supplyCheckpoints(uint256)": FunctionFragment;
    "supplyNumCheckpoints()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "userRewardPerTokenStored(address,uint256)": FunctionFragment;
    "userRewards(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DURATION", values?: undefined): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRewardPerToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUserRewards",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoints",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPriorBalanceIndex",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorRewardPerToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorSupplyIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardForOwner",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(functionFragment: "isReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastEarn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numCheckpoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenCheckpoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenNumCheckpoints",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rewardRate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsListLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supplyCheckpoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyNumCheckpoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenStored",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewards",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "DURATION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUserRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriorBalanceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriorRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriorSupplyIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastEarn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsListLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewards",
    data: BytesLike
  ): Result;

  events: {
    "ClaimRewards(address,address,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "NotifyReward(address,address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type ClaimRewardsEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; reward: string; amount: BigNumber }
>;

export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { from: string; tokenId: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type NotifyRewardEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; reward: string; amount: BigNumber }
>;

export type NotifyRewardEventFilter = TypedEventFilter<NotifyRewardEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { from: string; tokenId: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Bribe extends BaseContract {
  contractName: "Bribe";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BribeInterface;

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
    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    _deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _ve(overrides?: CallOverrides): Promise<[string]>;

    _withdraw(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchUserRewards(
      token: string,
      tokenId: BigNumberish,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkpoints(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
    >;

    earned(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getPriorBalanceIndex(
      tokenId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriorRewardPerToken(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getPriorSupplyIndex(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReward(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardForOwner(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    lastEarn(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastUpdateTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    periodFinish(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardPerTokenCheckpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        timestamp: BigNumber;
        rewardPerToken: BigNumber;
      }
    >;

    rewardPerTokenNumCheckpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardPerTokenStored(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardRate(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    rewardsListLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userRewards(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  _deposit(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _ve(overrides?: CallOverrides): Promise<string>;

  _withdraw(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  batchRewardPerToken(
    token: string,
    maxRuns: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchUserRewards(
    token: string,
    tokenId: BigNumberish,
    maxRuns: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkpoints(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
  >;

  earned(
    token: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  getPriorBalanceIndex(
    tokenId: BigNumberish,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriorRewardPerToken(
    token: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getPriorSupplyIndex(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReward(
    tokenId: BigNumberish,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardForOwner(
    tokenId: BigNumberish,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isReward(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  lastEarn(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastTimeRewardApplicable(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numCheckpoints(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  periodFinish(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenCheckpoints(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; rewardPerToken: BigNumber }
  >;

  rewardPerTokenNumCheckpoints(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardPerTokenStored(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

  supplyCheckpoints(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
  >;

  supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenStored(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userRewards(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    _deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _ve(overrides?: CallOverrides): Promise<string>;

    _withdraw(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchUserRewards(
      token: string,
      tokenId: BigNumberish,
      maxRuns: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkpoints(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
    >;

    earned(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    getPriorBalanceIndex(
      tokenId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorRewardPerToken(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getPriorSupplyIndex(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReward(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardForOwner(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    lastEarn(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    numCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodFinish(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerTokenCheckpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        timestamp: BigNumber;
        rewardPerToken: BigNumber;
      }
    >;

    rewardPerTokenNumCheckpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerTokenStored(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewards(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ClaimRewards(address,address,uint256)"(
      from?: string | null,
      reward?: string | null,
      amount?: null
    ): ClaimRewardsEventFilter;
    ClaimRewards(
      from?: string | null,
      reward?: string | null,
      amount?: null
    ): ClaimRewardsEventFilter;

    "Deposit(address,uint256,uint256)"(
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): DepositEventFilter;

    "NotifyReward(address,address,uint256)"(
      from?: string | null,
      reward?: string | null,
      amount?: null
    ): NotifyRewardEventFilter;
    NotifyReward(
      from?: string | null,
      reward?: string | null,
      amount?: null
    ): NotifyRewardEventFilter;

    "Withdraw(address,uint256,uint256)"(
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    _deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _ve(overrides?: CallOverrides): Promise<BigNumber>;

    _withdraw(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchUserRewards(
      token: string,
      tokenId: BigNumberish,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkpoints(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getPriorBalanceIndex(
      tokenId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorRewardPerToken(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorSupplyIndex(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReward(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardForOwner(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastEarn(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodFinish(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerTokenCheckpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerTokenNumCheckpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPerTokenStored(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsListLength(overrides?: CallOverrides): Promise<BigNumber>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewards(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _withdraw(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchUserRewards(
      token: string,
      tokenId: BigNumberish,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkpoints(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriorBalanceIndex(
      tokenId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriorRewardPerToken(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriorSupplyIndex(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardForOwner(
      tokenId: BigNumberish,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastEarn(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periodFinish(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerTokenCheckpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerTokenNumCheckpoints(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerTokenStored(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardRate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supplyNumCheckpoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRewards(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
