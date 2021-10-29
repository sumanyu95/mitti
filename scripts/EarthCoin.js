// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');


      const EarthCoin = await hre.ethers.getContractFactory("EarthCoin");

      const ECcontract = await EarthCoin.attach(
          "0x322b400cfB4B0BB9E92233aF618DE071dB154C97" // The deployed contract address
        );

       await ECcontract.addMinter("");

      //  await ECcontract.removeMinter("");

        await ECcontract.mint("","1000000000000000000");

      //const ECcanmint  = await ECcontract.CAN_MINT();
      //console.log("ECcanmint :", ECcanmint);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
