pragma solidity ^0.5.0;


import './Issuer.sol';


contract Badge is Issuer {
  mapping (bytes32 => address) public records;

  event CertificateIssued(bytes32 indexed record, uint256 timestamp, bool returnValue);

  function issueBadge(bytes32 _hash) external onlyOwner {

    bytes32 certificate = _hash;

    records[certificate] = msg.sender;
    emit CertificateIssued(certificate, block.timestamp, true);
  }


  function verifyBadges(bytes32 certificate) external view returns (bool) {

      if (records[certificate] == owner) {
        return true;
      }
        return false;
  }
}


