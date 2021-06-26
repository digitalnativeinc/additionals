const { ApiPromise, WsProvider } = require('@polkadot/api');

function Api(rpc, types) {
  const wsProvider = new WsProvider(rpc);
  return ApiPromise.create({ provider: wsProvider, types });
}

module.exports = Api;
