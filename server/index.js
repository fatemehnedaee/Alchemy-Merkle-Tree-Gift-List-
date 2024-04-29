const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_ROOT = '5d5aa28a4536ff81d4248eea3e7024858f13638717b83f99ad906b19a8675f9b';

app.post('/gift', (req, res) => {

  const proof = req.body.proof;
  const name = req.body.name;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
