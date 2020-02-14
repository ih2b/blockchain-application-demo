var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

var SMARTCONTRACT = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "Nom",
				"type": "string"
			},
			{
				"name": "Prenom",
				"type": "string"
			},
			{
				"name": "Age",
				"type": "string"
			}
		],
		"name": "ajouter_candidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id_Condidat",
				"type": "uint256"
			}
		],
		"name": "votePourCandidat",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidatList",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "Nom",
				"type": "string"
			},
			{
				"name": "Prenom",
				"type": "string"
			},
			{
				"name": "Age",
				"type": "string"
			},
			{
				"name": "nombreVoix",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCandidateList",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id_Condidat",
				"type": "uint256"
			}
		],
		"name": "informationCandidate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],"0x0b912577e48107b0aef456bbf075f52d6241c65c");


async function getNombreDesCondidat(){
    nb = SMARTCONTRACT.methods.getCandidateList().call();
    return nb ;
  }
  async function getinformationCandidate(id_Condidat){
    condidatres = SMARTCONTRACT.methods.informationCandidate(id_Condidat).call();
    return condidatres ;
  }

exports.ajouter_candidate = (req, res) => {
  SMARTCONTRACT.methods.ajouter_candidate(req.body.Nom, req.body.Prenom, req.body.Age)
  .send({from: "0xABE6d0f801f90a51d2e0aCce24c7dD3a2671d379",gas:3000000},function(error,result){
  })
  .then(result => {res.send(result)})
  .catch(e=>res.status(602).send({ error: "failed " }));
};
let Condidat=[];
exports.getCondidateList = async (req, res) => {
  Condidat =[];
var nb = await getNombreDesCondidat();
for (let i =0 ;i <nb;i++){
  tmp = await getinformationCandidate(i);
  Condidat.push({"id":i,"Nom":tmp[0],"Prenom":tmp[1],"Age":tmp[2],"nombreVote":tmp[3]});
}
res.send(Condidat);
};
exports.Vote = (req, res) => {
  SMARTCONTRACT.methods.votePourCandidat(req.body.id_Condidat)
  .send({from: "0xABE6d0f801f90a51d2e0aCce24c7dD3a2671d379",gas:3000000},function(error,result){
  })
  .then(result => {res.send(result)})
  .catch(e=>res.status(602).send({ error: "failed " }));
};