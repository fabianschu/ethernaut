const deployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    await deploy("Greeter", {
      contract: "Greeter",
      from: deployer,
      args: [],
      log: true,
    });
  };
  
  module.exports = deployFunction;
  