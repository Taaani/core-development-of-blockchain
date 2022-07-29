 const sha256 = require('sha256');
// constructor function which add the proprerties dynamincally.....
function BlockChain(){

    this.Chain = [],  //all the blocks create in our chain will be add in this array(mined block)
    this.PendingTransactions = [] //all the pending transaction add in this block 
    // before the new block is min when new block min then all panding transaction add in
    //  new block and block will add in the chain

   //  create genesis block for chain...
   this.CreateNewBlock(200,'0','0');
}

// prototype use to add properties and methods    in existed constructor function
// nonce : number that found from prof of work
 BlockChain.prototype.CreateNewBlock = function(nonce, PrevHash,Hash ){ //method of constructor
    const NewBlock ={
        index : this.Chain.length +1,
        timestamp : Date.now(),
        transaction : this.PendingTransactions,  //all pending trasaction found by tran. and then min the block
        nonce : nonce,
        PrevHash : PrevHash,
        Hash  : Hash,
    };
    this.PendingTransactions = [];
    this.Chain.push(NewBlock);
    return NewBlock;
 }

 BlockChain.prototype.GetLastBlock = function(){  // we get previous full block
    // pow by the previous block we find prev_hash and other proproties to scure blockChain
   //  pow add only legitemate block in chain
    
    return this.Chain[this.Chain.length-1];
 }
//  create new transaction....
BlockChain.prototype.CreateNewTransaction = function(amount,sender,recipient){
   const NewTransaction = {
      amount : amount,
      sender : sender,
      recipient : recipient,
   };
//   before the creation of new block all the transction add in the transcation array and when block is created 
// then transactions array add in the block
   this.PendingTransactions.push(NewTransaction);
   //this statement add the pending trasactions in the new block which newly created
   return this.GetLastBlock()['index']+1;
}
// making hash by using sha256 algorithm 
// in this method we create hash of over complete block which is the cur hash of the block
 BlockChain.prototype.MakHashBlock = function(PrivousHash,CurrentBlockData,nonce){ 
   // privousHash is also string and nonce is no. that covert in string and when we want to convert string of object or array which have key and value then use json.stingfiy
   const BlockDataInString = PrivousHash + nonce.toString() + JSON.stringify(CurrentBlockData);
   const RealHash = sha256(BlockDataInString);
   return RealHash;

 }
//  proff of work...
// pow check validation of new block...
// and how to check ? we give spacific condition on pow method like geratered hash contain
// 4 zero at start of hash and we create nonce value one that spacific hash 
// on that spacific condition and spacific nonce create a hash which cannot be break by hackers
BlockChain.prototype.ProfOfWork = function(PrivousHash,CurrentBlockData){
   let nonce = 0;
// pow check data like preBlockHash cData mean transaction detail and add nonce in the structure

   let HashMaker = this.MakHashBlock(PrivousHash,CurrentBlockData,nonce);
   while(HashMaker.substring(0,4) !== '0532'){
      nonce++;
      HashMaker = this.MakHashBlock(PrivousHash,CurrentBlockData,nonce);
      
   }
   return nonce;
   
}

 module.exports = BlockChain; 


