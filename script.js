const hre = require("hardhat");

async function main() {
  console.log("Environment network: ", process.env.HARDHAT_NETWORK);
  console.log("Hardhat arguments network:", hre.hardhatArguments.network);
  console.log("---");
  console.log("Network url:", hre.network.config.url);
  console.log("Provider url:", hre.ethers.provider.connection.url);
  console.log("---");
  const address = "0x8d5455354D3CE72a50CD55390df690a782A97958";
  console.log("Address:", address);
  console.log(
    "Balance:",
    hre.ethers.utils.formatEther(await hre.ethers.provider.getBalance(address))
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
