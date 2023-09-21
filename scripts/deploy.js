const hre = require("hardhat");
async function main() {
  const CrowdFounding = await hre.ethers.getContractFactory("CrowdFounding");
  const crowdFounding = await CrowdFounding.deploy();

  await crowdFounding.deployed();

  console.log("transaction:", crowdFounding.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
