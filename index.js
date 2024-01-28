// const http  = require("http");
// http.createServer((request,response)=>{
// response.writeHead(200,{"Content-Type":"text/html"});
// response.end("Hello World");
// }).listen(8000);
// console.log("Krishna");





// const library = require("./library");
// const value = library.sum(8,9);

// console.log(value);





// const Upper = require("./upperCase");

// const niii =Upper.ProperUpperCase();
// console.log(niii);

// const newDAteTime = require("./DateTime");

// const printvalue=newDAteTime.TimeValue();


// console.log(printvalue);






const newmail =  require("../Nodejs/ForwordMail/mail")


const value ={
"from":"BalaramLamsal137@gmail.com",
"to":"Balkrishnalamsal12@gmail.com",
"subject":"Hello Krishna Lamsal",
"text":"This is text"

}


const  SendMailEmail =(value) =>{

    newmail.sendMailGmail(value);

}



SendMailEmail(value);


