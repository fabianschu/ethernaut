const deployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    await deploy("Flipper", {
      from: deployer,
      args: [],
      log: true,
    });
  };
  
  module.exports = deployFunction;
  