



const encrypt = require("bcryptjs");


const newpw  =  (value)=>{

    return encrypt.hashSync(value,10);

}


const ComparePassowerd=(str,hash)=>{

return encrypt.compareSync(str,hash)



}


module.exports={ComparePassowerd,newpw};





