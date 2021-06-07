const { expect } = require("chai");

describe("DEVKToken", function() {
  it("Should be able to _mint", async function() {
    const DEVK = await ethers.getContractFactory("DEVKToken");
    const devk = await DEVK.deploy();
    
    await devk.deployed();
    expect(await devk.name()).to.equal("Developer Kaki");
    expect(await devk.symbol()).to.equal("DEVK");
    expect(await devk.totalSupply()).to.equal("10000000000000000000000");
  });
});
