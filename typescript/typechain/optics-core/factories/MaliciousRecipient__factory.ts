/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MaliciousRecipient,
  MaliciousRecipientInterface,
} from "../MaliciousRecipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610117806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806356d5d47514602d575b600080fd5b60df60048036036060811015604157600080fd5b63ffffffff82351691602081013591810190606081016040820135640100000000811115606d57600080fd5b820183602082011115607e57600080fd5b80359060200191846001830284011164010000000083111715609f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506028945050505050565b00fea264697066735822122092d2006b35ef90d06684f78fc731e452801233d10c99880960de312eb880c46c64736f6c63430007060033";

export class MaliciousRecipient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MaliciousRecipient> {
    return super.deploy(overrides || {}) as Promise<MaliciousRecipient>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MaliciousRecipient {
    return super.attach(address) as MaliciousRecipient;
  }
  connect(signer: Signer): MaliciousRecipient__factory {
    return super.connect(signer) as MaliciousRecipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousRecipientInterface {
    return new utils.Interface(_abi) as MaliciousRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousRecipient {
    return new Contract(address, _abi, signerOrProvider) as MaliciousRecipient;
  }
}
