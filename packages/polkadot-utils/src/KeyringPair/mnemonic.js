const { Keyring } = require('@polkadot/api');

function KeyringPairFromMnemonic(mnemonic, type = 'sr25519') {
  const keyring = new Keyring({ type });
  return keyring.addFromUri(mnemonic);
}

module.exports = KeyringPairFromMnemonic;
