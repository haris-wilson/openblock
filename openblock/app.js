const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

var cors = require('cors')

const { ExpressPeerServer } = require('peer');

const port = 8080;


const Web3 = require('Web3')
const web3 = new Web3('https://rpc-mumbai.matic.today')

// web3 object is now connected with Matic's node"));

const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"record","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"bool","name":"returnValue","type":"bool"}],"name":"CertificateIssued","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"}],"name":"issueBadge","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"records","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"certificate","type":"bytes32"}],"name":"verifyBadges","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];


/*Call the function which already deployed on ethereum network
  Notice: ABI have to modifeid when the smart contract code change*/
let Instance = web3.eth.contract(abi).at('0x238A097F4a31d9Caf99ddE59876af7860d7785a0');
const app = express();

function issue(hash){
	try {
     Instance.issueCertificate(hash);
    
    } catch(error) {
      console.log("issue failed");
    }
}


function verify(hash){

    try {

      const verified = Instance.verifyCertificate(hash);
      
      assert.equal(verified, true)
    } catch(error) {
      assert.equal(error, undefined)
    }
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/verify', function(req, res) {   
              
    const hash = req.body;
    if(hash){
        const hash = verify(hash);
        res.json({note : true});
    }
    else {
        res.json({note : false});
    }

});


app.post('/issue', function(req, res) {   
              
    const hash = req.body;
    if(hash){
        const hash = verify(hash);
        res.json({note : true});
    }
    else {
        res.json({note : false});
    }

});




const server = app.listen(port);

console.log("server is listening")


