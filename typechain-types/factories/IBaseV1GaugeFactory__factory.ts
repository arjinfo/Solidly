/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBaseV1GaugeFactory,
  IBaseV1GaugeFactoryInterface,
} from "../IBaseV1GaugeFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "createGauge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBaseV1GaugeFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseV1GaugeFactoryInterface {
    return new utils.Interface(_abi) as IBaseV1GaugeFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseV1GaugeFactory {
    return new Contract(address, _abi, signerOrProvider) as IBaseV1GaugeFactory;
  }
}
