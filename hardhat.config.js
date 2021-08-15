require("@nomiclabs/hardhat-waffle");

// Optionally, use this instead of hardhat-waffle
// require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/3RI0h7l9dI7NPpIWBKiASq6IV0cUFbRQ`,
    },
  },
  solidity: "0.8.4",
};
