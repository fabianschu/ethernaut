const { ethers } = require("hardhat");

const deployFunction = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const { address } = await ethers.getContract("CoinFlip");

  await deploy("Flipper", {
    from: deployer,
    args: [address],
    log: true,
  });
};

module.exports = deployFunction;
