const BlockChain = require("./Blockchain");

const Bitcoin = new BlockChain();

Bitcoin.CreateNewBlock(1234,"hqvidfsdjfsdsf","sdfksdlfk");
Bitcoin.CreateNewBlock(1234,"hqvidfsdjfsdsf","sdfksdlfk");
Bitcoin.CreateNewBlock(1234,"hqvidfsdjfsdsf","sdfksdlfk");
Bitcoin.CreateNewTransaction(500,"muhammad tahir", "naman shafique")
Bitcoin.CreateNewTransaction(1000, "muhammad tahir","rehan");
// bitcoin after adding trasaction...
Bitcoin.CreateNewBlock(4556,"myprehash","latesthash");


           //break

// const PrivousHash = "hsdfksdhflskdfhksdhfdjk";

// const CurrentBlockData = [
//     {
//         amount : 110,
//         sender : "tahir",
//         recipent : "Taaani",
//     },
//     {
//         amount : 100,
//         sender : "abudl",
//         recipent : "usman",
//     }
// ];
// // console.log(Bitcoin.MakHashBlock(PrivousHash,CurrentBlockData,nonce));
// console.log(Bitcoin.ProfOfWork(PrivousHash,CurrentBlockData));
// // hash created by proof of work we made it hash of new block
// console.log(Bitcoin.MakHashBlock(PrivousHash,CurrentBlockData,121203));

    

//  console.log(Bitcoin);
console.log(Bitcoin)
//  console.log(Bitcoin.Chain)
