const ethers = require('ethers');

function InfuraWSProvider(projectId, chainCode) {
  const InfuraApi = {
    projectId,
  };

  return new ethers.providers.InfuraWebSocketProvider(chainCode, projectId);
}

module.exports = InfuraWSProvider;
