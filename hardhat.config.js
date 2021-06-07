require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: {
        mnemonic: ""
      },
      hardfork: "petersburg",
      chainId: 97,
      gas: 4000000,
      gasPrice: 20000000000 // 20 GWei
    },
    mainnet: {
      url: "https://bsc-dataseed2.binance.org/",
      accounts: {
        mnemonic: ""
      },
      hardfork: "petersburg",
      chainId: 56,
      gas: 4000000,
      gasPrice: 5000000000 // 5 GWei
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com
    apiKey: ""
  },
  solidity: "0.8.0",
};

