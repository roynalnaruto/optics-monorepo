/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TokenRegistryInterface extends ethers.utils.Interface {
  functions: {
    "canonicalToRepresentation(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "representationToCanonical(address)": FunctionFragment;
    "setTemplate(address)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canonicalToRepresentation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "representationToCanonical",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setTemplate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "canonicalToRepresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "representationToCanonical",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenDeployed(uint32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
}

export class TokenRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenRegistryInterface;

  functions: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    setTemplate(
      _newTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
  };

  canonicalToRepresentation(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  representationToCanonical(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { domain: number; id: string }>;

  setTemplate(
    _newTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setXAppConnectionManager(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    setTemplate(_newTemplate: string, overrides?: CallOverrides): Promise<void>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    TokenDeployed(
      domain?: BigNumberish | null,
      id?: BytesLike | null,
      representation?: string | null
    ): TypedEventFilter<
      [number, string, string],
      { domain: number; id: string; representation: string }
    >;
  };

  estimateGas: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTemplate(
      _newTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTemplate(
      _newTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
