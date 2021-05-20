const { ethers } = require("hardhat");

async function main() {
  const Birthday = await ethers.getContractFactory("Birthday");
  console.log(Birthday);
  const birthday = await Birthday.deploy();

  await birthday.deployed();

  console.log("Birthday deployed to:", birthday.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
