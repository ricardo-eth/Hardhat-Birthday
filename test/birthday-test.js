const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Birthday", function () {
  it("Should have something from birthday to deployment", async function () {
    const Birthday = await ethers.getContractFactory("Birthday");
    const birthday = await Birthday.deploy();
    await birthday.deployed();
  });
});
