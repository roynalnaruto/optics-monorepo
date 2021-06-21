/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "ProcessError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "canConfirm",
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
    name: "confirm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_current",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_nextToProcess",
        type: "uint32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPending",
    outputs: [
      {
        internalType: "bytes32",
        name: "_pending",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextToProcess",
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
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
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
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
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
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161300b38038061300b8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612fa261006960003980610ced5280610d545250612fa26000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80638d3638f4116100e3578063ba739a621161008c578063d88beda211610066578063d88beda214610621578063df034cd014610629578063f6d161021461065a57610198565b8063ba739a62146105a3578063bf30a55d146105c4578063c19d93fb1461061957610198565b80639fa6a6e3116100bd5780639fa6a6e3146104e1578063ab91c7b0146104e9578063b31c01fb146104f157610198565b80638d3638f41461042b578063928bc4b214610433578063961681dc146104d957610198565b806339992668116101455780636188af0e1161011f5780636188af0e146103585780637022b58e1461040657806371bfb7b81461040e57610198565b8063399926681461032757806345630b1a1461032f578063456d06721461033757610198565b80632bbd59ca116101765780632bbd59ca146102a25780632bef2892146102e0578063371d3071146102fd57610198565b806314cfabb31461019d57806319d9d21a146101b957806325e3beda14610288575b600080fd5b6101a5610662565b604080519115158252519081900360200190f35b610286600480360360a08110156101cf57600080fd5b81359160208101918101906080810160608201356401000000008111156101f557600080fd5b82018360208201111561020757600080fd5b8035906020019184600183028401116401000000008311171561022957600080fd5b91939092909160208101903564010000000081111561024757600080fd5b82018360208201111561025957600080fd5b8035906020019184600183028401116401000000008311171561027b57600080fd5b50909250905061068e565b005b6102906108ed565b60408051918252519081900360200190f35b6102bf600480360360208110156102b857600080fd5b50356108f3565b604051808260028111156102cf57fe5b815260200191505060405180910390f35b6101a5600480360360208110156102f657600080fd5b5035610908565b6101a5600480360361044081101561031457600080fd5b508035906020810190610420013561091d565b610290610a3d565b610290610a43565b61033f610a58565b6040805163ffffffff9092168252519081900360200190f35b610286600480360361044081101561036f57600080fd5b81019060208101813564010000000081111561038a57600080fd5b82018360208201111561039c57600080fd5b803590602001918460018302840111640100000000831117156103be57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610a64565b610286610af0565b6102906004803603602081101561042457600080fd5b5035610cd9565b61033f610ceb565b6101a56004803603602081101561044957600080fd5b81019060208101813564010000000081111561046457600080fd5b82018360208201111561047657600080fd5b8035906020019184600183028401116401000000008311171561049857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d0f945050505050565b61033f6112df565b6102906112eb565b6102906112f1565b6102866004803603606081101561050757600080fd5b81359160208101359181019060608101604082013564010000000081111561052e57600080fd5b82018360208201111561054057600080fd5b8035906020019184600183028401116401000000008311171561056257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112fd945050505050565b6105ab6115e3565b6040805192835260208301919091528051918290030190f35b610286600480360360a08110156105da57600080fd5b5063ffffffff813581169173ffffffffffffffffffffffffffffffffffffffff6020820135169160408201359160608101359160809091013516611631565b6102bf6117d5565b6102906117f8565b6106316117ff565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610290611821565b600061066e600261182d565b158015906106895750610689610684600261186d565b61190e565b905090565b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156106bb57fe5b141561072857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261076a918891883591889088908190840183828082843760009201919091525061194292505050565b80156107b957506107b986866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061194292505050565b80156107ca57508435602086013514155b156108e5576107d76119da565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b61271081565b60086020526000908152604090205460ff1681565b60006109156002836119e4565b90505b919050565b60008060008581526008602052604090205460ff16600281111561093d57fe5b146109a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b60006109df858560208060200260405190810160405280929190826020800280828437600092019190915250879150611a609050565b90506109ea8161190e565b15610a30575050600083815260086020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610a36565b60009150505b9392505050565b60055481565b6004546000906106899063ffffffff16611b0b565b60065463ffffffff1681565b610a768380519060200120838361091d565b610ae157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610aea83610d0f565b50505050565b6002600054760100000000000000000000000000000000000000000000900460ff166002811115610b1d57fe5b1415610b8a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610b94600261182d565b610bff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080610c0c600261182d565b90505b600081118015610c275750610c27610684600261186d565b15610c5f57610c366002611b80565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610c0f565b81610ccb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f2174696d65000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610cd36119e2565b50600155565b60076020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610d1c8382611cb9565b90506000610d4b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611cdd565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610d9f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611d0e565b63ffffffff1614610e1157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b60065463ffffffff828116911614610e8a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f2173657175656e63650000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6001845160208087019190912060009081526008909152604090205460ff166002811115610eb457fe5b14610f2057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600260086000610f517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611d3f565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610f9357fe5b02179055506207c8305a101561100c57604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006110397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611d7e565b905073ffffffffffffffffffffffffffffffffffffffff81166356d5d4756207a1206110867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611d91565b6110b17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611dc1565b6111066110df7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611df2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611e63565b6040518563ffffffff1660e01b8152600401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561116457818101518382015260200161114c565b50505050905090810190601f1680156111915780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156111b257600080fd5b5087f1935050505080156111c4575060015b61129b573d8080156111f2576040519150601f19603f3d011682016040523d82523d6000602084013e6111f7565b606091505b50600094507f3c688a5f4cd6e38b537641d2b38bdf1f52e7da4d083c5c3b16a0847c1c7c642d816040518080602001828103825283818151815260200191508051906020019080838360005b8381101561125b578181015183820152602001611243565b50505050905090810190601f1680156112885780820380516001836020036101000a031916815260200191505b509250505060405180910390a1506112a0565b600193505b50600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001660019290920163ffffffff1691909117905550919050565b60045463ffffffff1681565b60015481565b6000610689600261182d565b6002600054760100000000000000000000000000000000000000000000900460ff16600281111561132a57fe5b141561139757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b60006113a3600261182d565b1115611425576113b36002611ea7565b831461142057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420656e64206f6620717565756500000000000000000000000000000000604482015290519081900360640190fd5b611495565b826001541461149557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b6114a0838383611942565b61150b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6261642073696700000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6115136119e2565b6005546000838152600760205260409020429091019055611535600283611ee4565b5060045460408051602080825284518183015284518694889463ffffffff909116937f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2938893919283929083019185019080838360005b838110156115a457818101518382015260200161158c565b50505050905090810190601f1680156115d15780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b6000806115f0600261182d565b15611618576115ff600261186d565b600081815260076020526040902054909250905061162d565b50506001546000818152600760205260409020545b9091565b600054610100900460ff168061164a575061164a611f51565b80611658575060005460ff16155b6116ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e5b602e913960400191505060405180910390fd5b600054610100900460ff1615801561171357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff881617905561174d6002611f62565b60018481556000858152600760205260409020556005839055600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff841617905561179f85611fa7565b80156108e557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050505050565b600054760100000000000000000000000000000000000000000000900460ff1681565b6207a12081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60006106896002611ea7565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611865828261213c565b949350505050565b600061187882612156565b156118e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5080546fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6000818152600760205260408120548061192c576000915050610918565b8042101580610a36575060015483149392505050565b60008061194d610a43565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061198e81612185565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff166119ba82856121d6565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b6119e2612270565b565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111611a54576000818152600185016020526040902054831415611a4c576001915050611a5a565b6001016119fc565b50600090505b92915050565b8260005b6020811015611b0357600183821c166000858360208110611a8157fe5b602002015190508160011415611ac75780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611af9565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611a64565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611bb8828261213c565b611c2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611c74576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b815160009060208401611cd464ffffffffff851682846122b3565b95945050505050565b60006109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246004612309565b60006109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004612309565b600080611d4b8361232a565b6bffffffffffffffffffffffff1690506000611d668461233e565b6bffffffffffffffffffffffff169091209392505050565b6000610915611d8c83612352565b612383565b60006109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612309565b60006109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020612386565b6000610915604c80611e257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861661233e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff91909116036000612531565b6060600080611e718461233e565b6bffffffffffffffffffffffff1690506040519150819250611e9684836020016125b7565b508181016020016040529052919050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b81546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009283900482166001019182169092029190911783558115611a5a576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b6000611f5c306126e3565b15905090565b80546fffffffffffffffffffffffffffffffff16611fa45780547fffffffffffffffffffffffffffffffff000000000000000000000000000000001660011781555b50565b600054610100900460ff1680611fc05750611fc0611f51565b80611fce575060005460ff16155b612023576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e5b602e913960400191505060405180910390fd5b600054610100900460ff1615801561208957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760100000000000000000000000000000000000000000000179055801561213857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60019103016fffffffffffffffffffffffffffffffff1690565b546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204161090565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461224857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a612266868285856126e9565b9695505050505050565b600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b6000806122c084846128d7565b90506040518111156122d0575060005b806122fe577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610a36565b611cd4858585612949565b60008160200360080260ff16612320858585612386565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b60006109157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c6020612386565b90565b600060ff821661239857506000610a36565b6123a18461233e565b6bffffffffffffffffffffffff166123bc8460ff85166128d7565b111561249b576123fd6123ce8561232a565b6bffffffffffffffffffffffff166123e58661233e565b6bffffffffffffffffffffffff16858560ff1661295c565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612460578181015183820152602001612448565b50505050905090810190601f16801561248d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff1611156124f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612eab603a913960400191505060405180910390fd5b6008820260006125078661232a565b6bffffffffffffffffffffffff169050600061252283612ab7565b91909501511695945050505050565b60008061253d8661232a565b6bffffffffffffffffffffffff16905061255686612b00565b61256a8561256484896128d7565b906128d7565b1115612599577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611865565b6125a381866128d7565b90506122668364ffffffffff1682866122b3565b60006125c283612b2a565b612617576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ee56028913960400191505060405180910390fd5b61262083612b3c565b612675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612f0d602b913960400191505060405180910390fd5b60006126808461233e565b6bffffffffffffffffffffffff169050600061269b8561232a565b6bffffffffffffffffffffffff16905060006040519050848111156126c05760206060fd5b8285848460045afa506122666126d587612b79565b64ffffffffff168685612949565b3b151590565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612764576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e186022913960400191505060405180910390fd5b8360ff16601b148061277957508360ff16601c145b6127ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e896022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561282a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611cd457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b81810182811015611a5a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b6060600061296986612b7f565b915050600061297786612b7f565b915050600061298586612b7f565b915050600061299386612b7f565b915050838383836040516020018080612f38603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612e3a82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612b0b8261233e565b612b148361232a565b016bffffffffffffffffffffffff169050919050565b6000612b3582612c53565b1592915050565b6000612b4782612b79565b64ffffffffff1664ffffffffff1415612b6257506000610918565b6000612b6d83612b00565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff161115612be75760ff600882021684901c612ba481612c7b565b61ffff16841793508160ff16601014612bbf57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612b85565b50600f5b60ff8160ff161015612c4d5760ff600882021684901c612c0a81612c7b565b61ffff16831792508160ff16600014612c2557601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612beb565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b6000612c8d60048360ff16901c612cab565b60ff161760081b62ffff0016612ca282612cab565b60ff1617919050565b600060f08083179060ff82161415612cc7576030915050610918565b8060ff1660f11415612cdd576031915050610918565b8060ff1660f21415612cf3576032915050610918565b8060ff1660f31415612d09576033915050610918565b8060ff1660f41415612d1f576034915050610918565b8060ff1660f51415612d35576035915050610918565b8060ff1660f61415612d4b576036915050610918565b8060ff1660f71415612d61576037915050610918565b8060ff1660f81415612d77576038915050610918565b8060ff1660f91415612d8d576039915050610918565b8060ff1660fa1415612da3576061915050610918565b8060ff1660fb1415612db9576062915050610918565b8060ff1660fc1415612dcf576063915050610918565b8060ff1660fd1415612de5576064915050610918565b8060ff1660fe1415612dfb576065915050610918565b8060ff1660ff1415612e11576066915050610918565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a26469706673582212209effe48237e403395c1cfc5aa8bae66bce459414dfe273782e391b792ff48e0b64736f6c63430007060033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
