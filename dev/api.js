// import express
 const express = require('express')
const firstApp = express()
// import Blockchain.js file
const BlockChain = require("./Blockchain.js");
// import uuid for dami data
const uuid = require("uuid");
// const nodeAddress = uuid.split('-').join('');
// mak a BlockChain instance bitcoin
const BitCoin = new BlockChain();
// import body-parser
const bodyParser = require("body-parser");
// use body parser 
firstApp.use(bodyParser.json());
firstApp.use(bodyParser.urlencoded({extended:false}));
// BitCoin.CreateNewBlock(5454,"dlkfj","kjsdhfk");
const port = process.argv[2];
// get method/,,,,
firstApp.get('/', function (req, res) {
  res.send(BitCoin);
})

// post method statically add data through postman
firstApp.post("/transaction", function(req,res){
   const blockNum =  BitCoin.CreateNewTransaction(req.body.amount,req.body.sender, req.body.recipient);
   res.json({note:`this transaction add in the block no ${blockNum}`});
})
// let a mine a block or create new block after gensis block
firstApp.get("/mine", function(req,res){
  // get previous hash of the block
  const lastBlock = BitCoin.GetLastBlock();
  const prevHash = lastBlock["Hash"];
  // now get nonce from pow
  const currentBlockData = {
    transaction : BitCoin.PendingTransactions,
    index : lastBlock['index']+1,
  }
  const nonce = BitCoin.ProfOfWork(prevHash,currentBlockData);
  // now get hash of current block
  const BlockHash = BitCoin.MakHashBlock(prevHash,currentBlockData,nonce);
// minner fee
  BitCoin.CreateNewTransaction(10,"jfjfjfjfj",uuid);
  
  // block created
  const createNewBlock = BitCoin.CreateNewBlock(nonce,prevHash,BlockHash);
  res.json({
    note: "block will be add successfully",
    Block : createNewBlock,
  })
})
// create Wallet
firstApp.get("/wallet",function(req,res){
  // dirname is envirment variable that tell us about the absolute path of directry
  res.sendFile(__dirname + "/wallet.html");

})
// write data on server and the data collect by api.js file
firstApp.post("/wallet", function(req,res){
  const blockNum =  BitCoin.CreateNewTransaction(req.body.amount,req.body.senderAddress, req.body.recipientAddress);
  res.json({note:`this transaction add in the block no ${blockNum}`});
})

firstApp.listen(port, ()=>{
  console.log(`server is runing at port number ${port}....`)
})