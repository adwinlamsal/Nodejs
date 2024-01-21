const { get } = require("http");



const TimeValue=()=>{

const currentDateTime=new Date();


const Time= currentDateTime.getTime();
const getYear= currentDateTime.getFullYear();


const ConcatTimeYear= String(Time).concat(":",getYear);


return ConcatTimeYear;


}


module.exports={
TimeValue
};