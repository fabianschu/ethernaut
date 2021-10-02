const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");

describe("Flipper", function () {
  beforeEach(async () => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const { address } = await deploy("CoinFlip", {
      from: deployer,
      args: [],
      log: true,
    });

    await deploy("Flipper", {
      from: deployer,
      args: [address],
      log: true,
    });
  });

  describe("#flip", () => {
    it("always guesses correct", async function () {
      const flipperInstance = await ethers.getContract("Flipper");
      await flipperInstance.flip();

      const coinFlipInstance = await ethers.getContract("CoinFlip");
      const numberConsecutiveWins = await coinFlipInstance.consecutiveWins();

      expect(numberConsecutiveWins).to.equal(1);
    });
  });
});
