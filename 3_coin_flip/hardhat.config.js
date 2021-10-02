require("dotenv").config({ path: "./.env" });
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

const { INFURA_KEY, MNEMONIC, PK } = process.env;

const sharedNetworkConfig = {};
if (PK) {
  sharedNetworkConfig.accounts = [PK];
} else {
  sharedNetworkConfig.accounts = {
    mnemonic: MNEMONIC 
  };
}

require("./tasks/flip.js");

module.exports = {
  paths: {
    artifacts: "build/artifacts",
    cache: "build/cache",
    deploy: "deploy",
    sources: "contracts",
    imports: "imports",
  },
  networks: {
    rinkeby: {
      ...sharedNetworkConfig,
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      saveDeployments: true,
    },
  },
  solidity: "0.8.8",
  namedAccounts: {
    deployer: 0,
    alice: 1,
    bob: 2,
  },
};
