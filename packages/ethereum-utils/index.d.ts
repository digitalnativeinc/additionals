export const ChainCode: {
  [key: string]: number;
};

export const InfuraWSProvider: (
  projectId: string,
  chainCode: string
) => InfuraWebSocketProvider;

export const ContractEventListener: (
  contract: Contract,
  event: string,
  callback: Function
) => void;
