/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XAppConnectionManager,
  XAppConnectionManagerInterface,
} from "../XAppConnectionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaUnenrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "WatcherPermissionSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "domainToReplica",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract Home",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "isReplica",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "ownerEnrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "ownerUnenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "replicaToDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "_access",
        type: "bool",
      },
    ],
    name: "setWatcherPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_updater",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "unenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "watcherPermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6114fd8061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063b9cff16211610066578063b9cff162146102f7578063e0e7a9131461031a578063f2fde38b146103d2578063f31faefb14610405576100f5565b80638da5cb5b146102445780638f5d90e014610275578063916c3470146102a85780639fa92f9d146102ef576100f5565b80635f8b1dba116100d35780635f8b1dba146101b35780636ef0f37f146101ff578063715018a6146102345780638d3638f41461023c576100f5565b80632f54bf6e146100fa578063427ebef5146101415780635190bc5314610180575b600080fd5b61012d6004803603602081101561011057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610444565b604080519115158252519081900360200190f35b61012d6004803603604081101561015757600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610483565b61012d6004803603602081101561019657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104c3565b6101e6600480360360208110156101c957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104f3565b6040805163ffffffff9092168252519081900360200190f35b6102326004803603602081101561021557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661050b565b005b6102326105fa565b6101e6610711565b61024c6107ad565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102326004803603602081101561028b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107c9565b610232600480360360608110156102be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169063ffffffff6020820135169060400135151561087d565b61024c6109cb565b61024c6004803603602081101561030d57600080fd5b503563ffffffff166109e7565b6102326004803603606081101561033057600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561035d57600080fd5b82018360208201111561036f57600080fd5b8035906020019184600183028401116401000000008311171561039157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a0f945050505050565b610232600480360360208110156103e857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c88565b6102326004803603604081101561041b57600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610e29565b600061044e6107ad565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260046020908152604080832063ffffffff8516845290915290205460ff1692915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205463ffffffff16151590565b60016020526000908152604090205463ffffffff1681565b610513610f9d565b73ffffffffffffffffffffffffffffffffffffffff166105316107ad565b73ffffffffffffffffffffffffffffffffffffffff16146105b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610602610f9d565b73ffffffffffffffffffffffffffffffffffffffff166106206107ad565b73ffffffffffffffffffffffffffffffffffffffff16146106a257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600354604080517f8d3638f4000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638d3638f4916004808301926020929190829003018186803b15801561077c57600080fd5b505afa158015610790573d6000803e3d6000fd5b505050506040513d60208110156107a657600080fd5b5051905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6107d1610f9d565b73ffffffffffffffffffffffffffffffffffffffff166107ef6107ad565b73ffffffffffffffffffffffffffffffffffffffff161461087157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61087a81610fa1565b50565b610885610f9d565b73ffffffffffffffffffffffffffffffffffffffff166108a36107ad565b73ffffffffffffffffffffffffffffffffffffffff161461092557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260046020908152604080832063ffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815194855291840191909152805191927f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c929081900390910190a2505050565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b63ffffffff831660009081526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1680610aa757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f217265706c696361206578697374730000000000000000000000000000000000604482015290519081900360640190fd5b610ab083611069565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b815260040160206040518083038186803b158015610b0c57600080fd5b505afa158015610b20573d6000803e3d6000fd5b505050506040513d6020811015610b3657600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614610bba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f2163757272656e74207570646174657200000000000000000000000000000000604482015290519081900360640190fd5b6000610bd085610bc98461106c565b8686611085565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260046020908152604080832063ffffffff8a16845290915290205490915060ff16610c7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f2176616c69642077617463686572000000000000000000000000000000000000604482015290519081900360640190fd5b610c8182610fa1565b5050505050565b610c90610f9d565b73ffffffffffffffffffffffffffffffffffffffff16610cae6107ad565b73ffffffffffffffffffffffffffffffffffffffff1614610d3057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061145e6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610e31610f9d565b73ffffffffffffffffffffffffffffffffffffffff16610e4f6107ad565b73ffffffffffffffffffffffffffffffffffffffff1614610ed157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610eda82610fa1565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260016020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8716908117909155808452600283529281902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168517905580519384525191927f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a9234929081900390910190a25050565b3390565b73ffffffffffffffffffffffffffffffffffffffff81166000818152600160208181526040808420805463ffffffff168086526002845282862080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559486905292825282547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001690925581519384529051919283927fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b929181900390910190a25050565b90565b73ffffffffffffffffffffffffffffffffffffffff1690565b60008061109185611069565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110d657600080fd5b505afa1580156110ea573d6000803e3d6000fd5b505050506040513d602081101561110057600080fd5b50516040805160208181018490527fffffffff0000000000000000000000000000000000000000000000000000000060e08b901b1682840152604480830189905283518084039091018152606490920190925280519101209091506111648161117b565b905061117081856111cc565b979650505050505050565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461123e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a61125c86828585611266565b9695505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156112e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114846022913960400191505060405180910390fd5b8360ff16601b14806112f657508360ff16601c145b61134b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114a66022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156113a7573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661145457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b9594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212203a76acf49019ffdaa3705d6b9813323d1dfe4b70d61f49d166b03d7d6a641fa064736f6c63430007060033";

export class XAppConnectionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XAppConnectionManager> {
    return super.deploy(overrides || {}) as Promise<XAppConnectionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XAppConnectionManager {
    return super.attach(address) as XAppConnectionManager;
  }
  connect(signer: Signer): XAppConnectionManager__factory {
    return super.connect(signer) as XAppConnectionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XAppConnectionManagerInterface {
    return new utils.Interface(_abi) as XAppConnectionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XAppConnectionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as XAppConnectionManager;
  }
}
