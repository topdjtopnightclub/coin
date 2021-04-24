const mnemonic = process.env.HDWALLET_MNEMONIC;

const networks= {
  coverage: {
    url: 'http://127.0.0.1:8555',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true,
  },
  localhost: {
    chainId: 1,
    url: 'http://127.0.0.1:8545',
    allowUnlimitedContractSize: true,
  },
};

if (mnemonic) {
    networks.bsctestnet = {
      chainId: 97,
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: {
        mnemonic,
      }
  },
  networks.bsc = {
    chainId: 56,
    url: 'https://bsc-dataseed.binance.org/',
    accounts: {
      mnemonic,
    }
}
}



module.exports = networks
