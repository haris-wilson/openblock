pragma solidity ^0.5.0;


contract Issuer{
    address public owner;

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


}
