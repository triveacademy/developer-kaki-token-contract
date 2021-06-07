// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');
  [owner] = await hre.ethers.getSigners();
  console.log(owner.address);

  // We get the contract to deploy
  const DEVKToken = await hre.ethers.getContractFactory("DEVKToken");
  const devk = await DEVKToken.deploy();

  await devk.deployed();

  console.log("devk deployed to:", devk.address);

  // Sending source code to be verified by bscscan
  await hre.run("verify:verify", {
    address: devk.address,
    contract: "contracts/DEVKToken.sol:DEVKToken"
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
