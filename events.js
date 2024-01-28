

const events = require("events");
const { emit } = require("process");


const value = new events.EventEmitter();



const discount=(percent)=>{

   console.log(` I heard  ${percent} discount  `);

   emit("shopping",(percent)=>{
    Shopping(percent)
   })


};

const Shopping=(percent)=>{

    console.log(` I heard  ${percent} discount  on shopping `)
 
 
 };



 value.on("discount",discount);
 value.on("shopping",Shopping)
 
 
 value.emit("discount",20);











