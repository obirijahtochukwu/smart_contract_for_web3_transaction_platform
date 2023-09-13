// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Skr17BbGGt_h57MOTEXr3SHvec0dgj4v",
      accounts: [
        "67b91e4b95ffa033de6453e2ff3359b1f17badb8aac6b485efb3b27f86675a85",
      ],
    },
  },
};
