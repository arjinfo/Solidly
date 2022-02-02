import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { BigNumber, Contract, ContractFactory, Signer, Wallet } from "ethers";

const { provider } = waffle;

import {
  Token,
  Ve,
  BaseV1Factory,
  BaseV1Router01,
  BaseV1GaugeFactory,
  BaseV1Voter,
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe.only("veRICKS", function () {
  //signers
  let owner: SignerWithAddress;
  let owner2: SignerWithAddress;
  let owner3: SignerWithAddress;
  let veDAO_sig: SignerWithAddress;
  let quants_sig: SignerWithAddress;

  //tokens
  let tokenFactory: ContractFactory;
  let ve_token: Token;
  let ust: Token;
  let dola: Token;
  let ve: Ve;
  let ve_underlying_amount = ethers.BigNumber.from("1000000000000000000000");

  //solidly
  let pool_factory: BaseV1Factory;
  let router: BaseV1Router01;
  let gauge_factory: BaseV1GaugeFactory;
  let voter_factory: BaseV1Voter;

  async function initializeSolidity() {}

  before(async function () {
    // // create solidly exchange
    // const BaseV1Factory = await ethers.getContractFactory("BaseV1Factory");
    // const BaseV1Router = await ethers.getContractFactory("BaseV1Router01");
    // const BaseV1GaugeFactory = await ethers.getContractFactory(
    //   "BaseV1GaugeFactory"
    // );
    // pool_factory = (await BaseV1Factory.deploy()) as BaseV1Factory;
    // router = (await BaseV1Router.deploy(
    //   pool_factory.address,
    //   owner.address
    // )) as BaseV1Router01;
    // gauge_factory = (await BaseV1GaugeFactory.deploy()) as BaseV1GaugeFactory;
    // await pool_factory.deployed();
    // await router.deployed();
    // await gauge_factory.deployed();
    // const BaseV1Voter = await ethers.getContractFactory("BaseV1Voter");
    // voter_factory = (await BaseV1Voter.deploy(
    //   ve.address,
    //   pool_factory.address,
    //   gauge_factory.address
    // )) as BaseV1Voter;
    // await voter_factory.deployed();
    // // mint dola and ust
    // ust = (await tokenFactory.deploy("ust", "ust", 6, owner.address)) as Token;
    // await ust.mint(owner.address, ethers.BigNumber.from("1000000000000000000"));
    // await ust.mint(
    //   owner2.address,
    //   ethers.BigNumber.from("1000000000000000000")
    // );
    // await ust.mint(
    //   owner3.address,
    //   ethers.BigNumber.from("1000000000000000000")
    // );
    // dola = (await tokenFactory.deploy(
    //   "DOLA",
    //   "DOLA",
    //   18,
    //   owner.address
    // )) as Token;
    // await dola.mint(
    //   owner.address,
    //   ethers.BigNumber.from("1000000000000000000000000000000")
    // );
    // await dola.mint(
    //   owner2.address,
    //   ethers.BigNumber.from("1000000000000000000000000000000")
    // );
    // await dola.mint(
    //   owner3.address,
    //   ethers.BigNumber.from("1000000000000000000000000000000")
    // );
    // await ust.deployed();
    // await dola.deployed();
    // // Pool creation is permissionless
    // const token_amount = ethers.BigNumber.from("1000000");
    // await ust.approve(router.address, token_amount);
    // await dola.approve(router.address, token_amount);
    // await router.addLiquidity(
    //   dola.address,
    //   ust.address,
    //   true,
    //   token_amount,
    //   token_amount,
    //   0,
    //   0,
    //   owner.address,
    //   Date.now()
    // );
    // expect(await pool_factory.allPairsLength()).to.equal(1);
    // const mim_dola_pair = await router.pairFor(dola.address, ust.address, true);
    // // Gauge creation is permissionless
    // await voter_factory.createGauge(mim_dola_pair);
    // const mim_dola_gauge_address = await voter_factory.gauges(mim_dola_pair);
    // console.log(await voter_factory.poke(1));
  });

  // Step 1. Create a pool with 2 assets Basev1Router01.addLiquidity
  // Step 2. Add a gauge to the pool created Basev1Voter.createGauge
  // Step 3. Vote for the pools which you would like to incentivze through Solidly w/ quant wallet
  it("Set approval for quants wallet", async function () {
    const [owner, veDAO_sig, quants_sig] = await ethers.getSigners();

    // initialize ve
    const tokenFactory = await ethers.getContractFactory("Token", owner);

    // create ve_token
    ve_token = (await tokenFactory.deploy(
      "VE",
      "VE",
      18,
      owner.address
    )) as Token;
    await ve_token.deployed();
    await ve_token.mint(owner.address, ve_underlying_amount);

    // create ve
    const ve_contract = await ethers.getContractFactory("contracts/ve.sol:ve");
    ve = (await ve_contract.deploy(ve_token.address)) as Ve;
    await ve.deployed();

    // transfer ve NFT to veDAO_sig
    const lockDuration = 7 * 24 * 3600; // 1 week
    await ve_token.approve(ve.address, ve_underlying_amount);
    await ve.create_lock(ve_underlying_amount, lockDuration);
    await ve.transferFrom(owner.address, veDAO_sig.address, 1);

    // expect(await ve.ownerOf(1)).to.equal(veDAO_sig.address); //veDAO owns token

    await ve.connect(veDAO_sig).setApprovalForAll(quants_sig.address, true);
    expect(await ve.isApprovedForAll(veDAO_sig.address, quants_sig.address)).to
      .be.true;
    // quants can do any operation on ve

    // let token0, token1, pair;
    // [token0, token1] = await router.sortTokens(ust.address, dola.address);
    // expect((await pair.token0()).toUpperCase()).to.equal(token0.toUpperCase());
    // expect((await pair.token1()).toUpperCase()).to.equal(token1.toUpperCase());
  });
});
//     token = await ethers.getContractFactory("Token")
//     ve_underlying = await token.deploy("VE", "VE", 18, token_owner.address);
//     await ve_underlying.deployed();
//     await ve_underlying.mint(token_owner.address, ve_underlying_amount)
//     vecontract = await ethers.getContractFactoryFromArtifact(veArtifact)
//     // vecontract = await ethers.getContractFactory("contracts/ve.sol:ve")
//     ve = await vecontract.deploy(ve_underlying.address)
//     await ve.deployed()
//     console.log(await ve.balanceOf(token_owner.address))

//     // RICKSFactory = await ethers.getContractFactory("RICKS");
//     // ricks = (await deployContract(addr2, RicksArtifact))
//     // console.log(ricks)
//     // console.log(RICKSFactory)

//     expect(ve).to.eq(ve)

// })

// async function runAuctions(winningBids, ricks) {
//     const averagePrices = [];
//     for(let i = 0; i < winningBids.length; i++) {
//         price  = ethers.utils.parseEther(winningBids[i]);
//         await increaseBlockTime(24 * hour);
//         await ricks.connect(addr1).startAuction({value: price});
//         const auctionAmount = await ricks.tokenAmountForAuction();
//         averagePrices.push(price.div(auctionAmount));
//         await increaseBlockTime(4 * hour);
//         await ricks.endAuction();
//     }
//     return averagePrices;
// }

// async function increaseBlockTime(seconds) {
//     await network.provider.send("evm_increaseTime", [seconds])
//     await network.provider.send("evm_mine")
// }

//     async function setUpRicks(tokenId) {
//         const initialRicksSupply = 100;
//         const dailyInflationRate = 50; // 5%

//         // const ricksInstance = await deployContract()

//    //     const ricksInstance = await RICKSFactory.deploy("RICKS", "RKS", erc721.address, tokenId, initialRicksSupply, dailyInflationRate);
//         await erc721.mint(tokenId);
//         await erc721.approve(ricksInstance.address, tokenId);
//         await ricksInstance.activate();
//         return ricksInstance
//     }

// Insert NFT into RICKS
// Third-party control of NFT in RICKS
//    ensure third-party can vote on gauges, claim fees (what else?)
// Self-bid on auctions
// Distribution of rewards to stakers on auction win and lose
