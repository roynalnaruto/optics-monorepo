/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "TypedMemView",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TypedMemView__factory>;
    getContractFactory(
      name: "Common",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Common__factory>;
    getContractFactory(
      name: "GovernanceRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernanceRouter__factory>;
    getContractFactory(
      name: "Home",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Home__factory>;
    getContractFactory(
      name: "MerkleTreeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleTreeManager__factory>;
    getContractFactory(
      name: "QueueManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QueueManager__factory>;
    getContractFactory(
      name: "Replica",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Replica__factory>;
    getContractFactory(
      name: "MaliciousRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MaliciousRecipient__factory>;
    getContractFactory(
      name: "MysteryMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MysteryMath__factory>;
    getContractFactory(
      name: "MysteryMathV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MysteryMathV1__factory>;
    getContractFactory(
      name: "MysteryMathV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MysteryMathV2__factory>;
    getContractFactory(
      name: "TestCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCommon__factory>;
    getContractFactory(
      name: "TestGovernanceRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestGovernanceRouter__factory>;
    getContractFactory(
      name: "TestHome",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestHome__factory>;
    getContractFactory(
      name: "TestMerkle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestMerkle__factory>;
    getContractFactory(
      name: "TestMessage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestMessage__factory>;
    getContractFactory(
      name: "TestQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestQueue__factory>;
    getContractFactory(
      name: "TestRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestRecipient__factory>;
    getContractFactory(
      name: "TestReplica",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestReplica__factory>;
    getContractFactory(
      name: "TestXAppConnectionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestXAppConnectionManager__factory>;
    getContractFactory(
      name: "UpdaterManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpdaterManager__factory>;
    getContractFactory(
      name: "UpgradeBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeBeacon__factory>;
    getContractFactory(
      name: "UpgradeBeaconController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeBeaconController__factory>;
    getContractFactory(
      name: "UpgradeBeaconProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeBeaconProxy__factory>;
    getContractFactory(
      name: "XAppConnectionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XAppConnectionManager__factory>;
    getContractFactory(
      name: "IMessageRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMessageRecipient__factory>;
    getContractFactory(
      name: "IUpdaterManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUpdaterManager__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
