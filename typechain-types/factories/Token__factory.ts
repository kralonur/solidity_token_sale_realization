/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c9438038062001c94833981810160405281019062000037919062000197565b818181600390805190602001906200005192919062000075565b5080600490805190602001906200006a92919062000075565b50505050506200037a565b82805462000083906200029f565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000233565b6200020a565b9050828152602081018484840111156200015557600080fd5b6200016284828562000269565b509392505050565b600082601f8301126200017c57600080fd5b81516200018e84826020860162000125565b91505092915050565b60008060408385031215620001ab57600080fd5b600083015167ffffffffffffffff811115620001c657600080fd5b620001d4858286016200016a565b925050602083015167ffffffffffffffff811115620001f257600080fd5b62000200858286016200016a565b9150509250929050565b60006200021662000229565b9050620002248282620002d5565b919050565b6000604051905090565b600067ffffffffffffffff8211156200025157620002506200033a565b5b6200025c8262000369565b9050602081019050919050565b60005b83811015620002895780820151818401526020810190506200026c565b8381111562000299576000848401525b50505050565b60006002820490506001821680620002b857607f821691505b60208210811415620002cf57620002ce6200030b565b5b50919050565b620002e08262000369565b810181811067ffffffffffffffff821117156200030257620003016200033a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61190a806200038a6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c5780639dc29fac116100665780639dc29fac14610228578063a457c2d714610244578063a9059cbb14610274578063dd62ed3e146102a4576100cf565b806340c10f19146101be57806370a08231146101da57806395d89b411461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d4565b6040516100e9919061124f565b60405180910390f35b61010c60048036038101906101079190611034565b610366565b6040516101199190611234565b60405180910390f35b61012a610384565b60405161013791906113b1565b60405180910390f35b61015a60048036038101906101559190610fe5565b61038e565b6040516101679190611234565b60405180910390f35b610178610486565b60405161018591906113cc565b60405180910390f35b6101a860048036038101906101a39190611034565b61048f565b6040516101b59190611234565b60405180910390f35b6101d860048036038101906101d39190611034565b61053b565b005b6101f460048036038101906101ef9190610f80565b610549565b60405161020191906113b1565b60405180910390f35b610212610591565b60405161021f919061124f565b60405180910390f35b610242600480360381019061023d9190611034565b610623565b005b61025e60048036038101906102599190611034565b610631565b60405161026b9190611234565b60405180910390f35b61028e60048036038101906102899190611034565b61071c565b60405161029b9190611234565b60405180910390f35b6102be60048036038101906102b99190610fa9565b61073a565b6040516102cb91906113b1565b60405180910390f35b6060600380546102e390611515565b80601f016020809104026020016040519081016040528092919081815260200182805461030f90611515565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b600061037a6103736107c1565b84846107c9565b6001905092915050565b6000600254905090565b600061039b848484610994565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103e66107c1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d906112f1565b60405180910390fd5b61047a856104726107c1565b8584036107c9565b60019150509392505050565b60006012905090565b600061053161049c6107c1565b8484600160006104aa6107c1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461052c9190611403565b6107c9565b6001905092915050565b6105458282610c15565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105a090611515565b80601f01602080910402602001604051908101604052809291908181526020018280546105cc90611515565b80156106195780601f106105ee57610100808354040283529160200191610619565b820191906000526020600020905b8154815290600101906020018083116105fc57829003601f168201915b5050505050905090565b61062d8282610d75565b5050565b600080600160006106406107c1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490611371565b60405180910390fd5b6107116107086107c1565b858584036107c9565b600191505092915050565b60006107306107296107c1565b8484610994565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610839576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083090611351565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a0906112b1565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161098791906113b1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fb90611331565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b90611271565b60405180910390fd5b610a7f838383610f4c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afc906112d1565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b989190611403565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bfc91906113b1565b60405180910390a3610c0f848484610f51565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c90611391565b60405180910390fd5b610c9160008383610f4c565b8060026000828254610ca39190611403565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cf89190611403565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d5d91906113b1565b60405180910390a3610d7160008383610f51565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610de5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddc90611311565b60405180910390fd5b610df182600083610f4c565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6e90611291565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610ece9190611459565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f3391906113b1565b60405180910390a3610f4783600084610f51565b505050565b505050565b505050565b600081359050610f65816118a6565b92915050565b600081359050610f7a816118bd565b92915050565b600060208284031215610f9257600080fd5b6000610fa084828501610f56565b91505092915050565b60008060408385031215610fbc57600080fd5b6000610fca85828601610f56565b9250506020610fdb85828601610f56565b9150509250929050565b600080600060608486031215610ffa57600080fd5b600061100886828701610f56565b935050602061101986828701610f56565b925050604061102a86828701610f6b565b9150509250925092565b6000806040838503121561104757600080fd5b600061105585828601610f56565b925050602061106685828601610f6b565b9150509250929050565b6110798161149f565b82525050565b600061108a826113e7565b61109481856113f2565b93506110a48185602086016114e2565b6110ad816115a5565b840191505092915050565b60006110c56023836113f2565b91506110d0826115b6565b604082019050919050565b60006110e86022836113f2565b91506110f382611605565b604082019050919050565b600061110b6022836113f2565b915061111682611654565b604082019050919050565b600061112e6026836113f2565b9150611139826116a3565b604082019050919050565b60006111516028836113f2565b915061115c826116f2565b604082019050919050565b60006111746021836113f2565b915061117f82611741565b604082019050919050565b60006111976025836113f2565b91506111a282611790565b604082019050919050565b60006111ba6024836113f2565b91506111c5826117df565b604082019050919050565b60006111dd6025836113f2565b91506111e88261182e565b604082019050919050565b6000611200601f836113f2565b915061120b8261187d565b602082019050919050565b61121f816114cb565b82525050565b61122e816114d5565b82525050565b60006020820190506112496000830184611070565b92915050565b60006020820190508181036000830152611269818461107f565b905092915050565b6000602082019050818103600083015261128a816110b8565b9050919050565b600060208201905081810360008301526112aa816110db565b9050919050565b600060208201905081810360008301526112ca816110fe565b9050919050565b600060208201905081810360008301526112ea81611121565b9050919050565b6000602082019050818103600083015261130a81611144565b9050919050565b6000602082019050818103600083015261132a81611167565b9050919050565b6000602082019050818103600083015261134a8161118a565b9050919050565b6000602082019050818103600083015261136a816111ad565b9050919050565b6000602082019050818103600083015261138a816111d0565b9050919050565b600060208201905081810360008301526113aa816111f3565b9050919050565b60006020820190506113c66000830184611216565b92915050565b60006020820190506113e16000830184611225565b92915050565b600081519050919050565b600082825260208201905092915050565b600061140e826114cb565b9150611419836114cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561144e5761144d611547565b5b828201905092915050565b6000611464826114cb565b915061146f836114cb565b92508282101561148257611481611547565b5b828203905092915050565b6000611498826114ab565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156115005780820151818401526020810190506114e5565b8381111561150f576000848401525b50505050565b6000600282049050600182168061152d57607f821691505b6020821081141561154157611540611576565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6118af8161148d565b81146118ba57600080fd5b50565b6118c6816114cb565b81146118d157600080fd5b5056fea2646970667358221220f09e17948b59427feb065a6ea60b0cf040e8ccdd9216e9c09979a8624fddc08d64736f6c63430008040033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(name, symbol, overrides || {}) as Promise<Token>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): Token {
    return super.attach(address) as Token;
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
