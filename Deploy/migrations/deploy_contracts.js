
let Badge = artifacts.require("./Badge.sol");

module.exports = function(deployer) {
  deployer.deploy(Badge);
};

