task("flip", "flips coin").setAction(async (params, { ethers }) => {
  console.log(`Flip coin...`);
  const coinFlipInstance = await ethers.getContract("Flipper");

  const tx = await coinFlipInstance.flip(true);
  console.log(tx);
});

task("getConsecutiveWins", "get number of consecutive wins").setAction(
  async (params, { ethers }) => {
    console.log(`get number of consecutive wins...`);
    const coinFlipInstance = await ethers.getContract("CoinFlip");

    const numberConsecutiveWins = await coinFlipInstance.consecutiveWins();
    console.log("Consecutive wins: ", numberConsecutiveWins.toString());
  }
);
