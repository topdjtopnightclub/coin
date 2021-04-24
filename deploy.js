const deployFunction = async function (hre) {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const { deploy } = deployments;

  let { deployer, admin } = await getNamedAccounts();

  const chainId = parseInt(await getChainId());
  const signer = ethers.provider.getSigner(deployer);


  console.log(`deployer: ${deployer.address}`);

  console.log(`\nDeploying Harambe 2.0...`);
  const harambeDeploy = await deploy('Harambe', {
    from: deployer,
    gasLimit: 6000000
  });
  console.log("Harambe at ", harambeDeploy.address)
};
module.exports = deployFunction
