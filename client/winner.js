const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

  const merkleTree = new MerkleTree(niceList);

  const name = 'Fatemeh Nedaee';
  const index = niceList.findIndex(n => n === name);

  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {proof: proof, name: name});

  console.log({ gift });
}

main();