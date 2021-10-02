task("flip", "flips coin").setAction(async (params, { ethers }) => {
  console.log(`Flip coin...`);
  const flipperInstance = await ethers.getContract("Flipper");

  const tx = await flipperInstance.flip();
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
