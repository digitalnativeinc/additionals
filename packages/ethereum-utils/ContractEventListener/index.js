const ethers = require('ethers');

function eventListener(contract, event, callback) {
  contract.on(event, callback);
}

module.exports = eventListener;
