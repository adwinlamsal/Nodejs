


const phoneNumberValidate=(number)=>{


if(String(number).length==10){

    const array = String(number).split("")

if(array[0]==9 && array[1]==8){


    console.log("Valid Number");
}else{


console.log("Invalid Number");


}


}else{

console.log("Invalid")

}

}





phoneNumberValidate(9867374177);