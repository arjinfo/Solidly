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

export interface GaugeInterface extends utils.Interface {
  contractName: "Gauge";
  functions: {
    "_ve()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "batchRewardPerToken(address,uint256)": FunctionFragment;
    "batchUserRewards(address,address,uint256)": FunctionFragment;
    "bribe()": FunctionFragment;
    "checkpoints(address,uint256)": FunctionFragment;
    "claimFees()": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "depositAll(uint256)": FunctionFragment;
    "derivedBalance(address)": FunctionFragment;
    "derivedBalances(address)": FunctionFragment;
    "derivedSupply()": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "getPriorBalanceIndex(address,uint256)": FunctionFragment;
    "getPriorRewardPerToken(address,uint256)": FunctionFragment;
    "getPriorSupplyIndex(uint256)": FunctionFragment;
    "getReward(address,address[])": FunctionFragment;
    "isReward(address)": FunctionFragment;
    "lastEarn(address,address)": FunctionFragment;
    "lastTimeRewardApplicable(address)": FunctionFragment;
    "lastUpdateTime(address)": FunctionFragment;
    "left(address)": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "numCheckpoints(address)": FunctionFragment;
    "periodFinish(address)": FunctionFragment;
    "rewardPerToken(address)": FunctionFragment;
    "rewardPerTokenCheckpoints(address,uint256)": FunctionFragment;
    "rewardPerTokenNumCheckpoints(address)": FunctionFragment;
    "rewardPerTokenStored(address)": FunctionFragment;
    "rewardRate(address)": FunctionFragment;
    "rewards(uint256)": FunctionFragment;
    "rewardsListLength()": FunctionFragment;
    "stake()": FunctionFragment;
    "supplyCheckpoints(uint256)": FunctionFragment;
    "supplyNumCheckpoints()": FunctionFragment;
    "tokenIds(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "userRewardPerTokenStored(address,address)": FunctionFragment;
    "userRewards(address,address)": FunctionFragment;
    "voter()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawAll()": FunctionFragment;
    "withdrawToken(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_ve", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "batchRewardPerToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUserRewards",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bribe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkpoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "derivedBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "derivedBalances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "derivedSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorBalanceIndex",
    values: [string, BigNumberish]
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
    values: [string, string[]]
  ): string;
  encodeFunctionData(functionFragment: "isReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastEarn",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "left", values: [string]): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numCheckpoints",
    values: [string]
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
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supplyCheckpoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyNumCheckpoints",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenIds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenStored",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewards",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "voter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_ve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUserRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bribe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "derivedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "derivedBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "derivedSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "left", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supplyCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyNumCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenIds", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "ClaimFees(address,uint256,uint256)": EventFragment;
    "ClaimRewards(address,address,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "NotifyReward(address,address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimFees"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NotifyReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type ClaimFeesEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { from: string; claimed0: BigNumber; claimed1: BigNumber }
>;

export type ClaimFeesEventFilter = TypedEventFilter<ClaimFeesEvent>;

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

export interface Gauge extends BaseContract {
  contractName: "Gauge";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GaugeInterface;

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

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchUserRewards(
      token: string,
      account: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bribe(overrides?: CallOverrides): Promise<[string]>;

    checkpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
    >;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositAll(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    derivedBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    derivedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    derivedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriorBalanceIndex(
      account: string,
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
      account: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    lastEarn(
      arg0: string,
      arg1: string,
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

    left(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numCheckpoints(
      arg0: string,
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

    stake(overrides?: CallOverrides): Promise<[string]>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    voter(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _ve(overrides?: CallOverrides): Promise<string>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  batchRewardPerToken(
    token: string,
    maxRuns: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchUserRewards(
    token: string,
    account: string,
    maxRuns: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bribe(overrides?: CallOverrides): Promise<string>;

  checkpoints(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
  >;

  claimFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositAll(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  derivedBalance(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  derivedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;

  earned(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriorBalanceIndex(
    account: string,
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
    account: string,
    tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isReward(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  lastEarn(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastTimeRewardApplicable(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  left(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

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

  stake(overrides?: CallOverrides): Promise<string>;

  supplyCheckpoints(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
  >;

  supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

  tokenIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenStored(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userRewards(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  voter(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    amount: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _ve(overrides?: CallOverrides): Promise<string>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchUserRewards(
      token: string,
      account: string,
      maxRuns: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bribe(overrides?: CallOverrides): Promise<string>;

    checkpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; balanceOf: BigNumber }
    >;

    claimFees(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { claimed0: BigNumber; claimed1: BigNumber }
    >;

    deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositAll(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    derivedBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    derivedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorBalanceIndex(
      account: string,
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
      account: string,
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    lastEarn(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    left(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

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

    stake(overrides?: CallOverrides): Promise<string>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; supply: BigNumber }
    >;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<string>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;

    withdrawToken(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClaimFees(address,uint256,uint256)"(
      from?: string | null,
      claimed0?: null,
      claimed1?: null
    ): ClaimFeesEventFilter;
    ClaimFees(
      from?: string | null,
      claimed0?: null,
      claimed1?: null
    ): ClaimFeesEventFilter;

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
    _ve(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchUserRewards(
      token: string,
      account: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bribe(overrides?: CallOverrides): Promise<BigNumber>;

    checkpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositAll(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    derivedBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    derivedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    derivedSupply(overrides?: CallOverrides): Promise<BigNumber>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorBalanceIndex(
      account: string,
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
      account: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isReward(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastEarn(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    left(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

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

    stake(overrides?: CallOverrides): Promise<BigNumber>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyNumCheckpoints(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchRewardPerToken(
      token: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchUserRewards(
      token: string,
      account: string,
      maxRuns: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bribe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkpoints(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositAll(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    derivedBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    derivedBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    derivedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriorBalanceIndex(
      account: string,
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
      account: string,
      tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isReward(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastEarn(
      arg0: string,
      arg1: string,
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

    left(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numCheckpoints(
      arg0: string,
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

    stake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supplyCheckpoints(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supplyNumCheckpoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenStored(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      amount: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
