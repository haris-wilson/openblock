## openblock
### Framework to add Open Badges credentials to Ethereum through Matic Network.

* The Open Badges issuing and frontend are hosted on : https://openbadges-c7d08.web.app/modelissuer.html (must be imporved for the product we are developing)
https://openbadges-c7d08.web.app/modeluser.html


Dapp for decentralised OpenBadges issuing and verification.

Contains services for issuing and downloading the OpenBadges fromat achievements.

Smart Contracts are deployed using the Truffle framework.

* On issuing OpenBadges the data is hashed(SHA256) and added to the blockchain (Ethereum - Matic Side Chain) through smart contracts.

* A smart contract created for saving and retrieving data from the blockchain.

* When the badges need to verified the hash of the certificate is calculated and checked if it is in blockchain. If it is present the badge is verified.


#### Issuing, Revoking, Verifing
The design is to add functionalities to add, remove(change state), verify the data in blockchain.
* The smart contract created in this repository is a demo for the experimental purpose.

Revokation is not added.
There were a problem in connecting Truffle to the testnet (mumbai), So the smart contract was successfully executed through Remix IDE.

Able to create OpenBadges service, smart contract deploy and Node.js server for the communication.


The Matic Network proved very successful in providing the requirements for the proposed idea - low transaction fees, low block creation time etc.


