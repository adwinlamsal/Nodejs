// const bcrypt = require('bcryptjs');


// const bcryptjs=(name)=>{

// const gen = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(name, gen);

// console.log(hash);


//     const haspassword = hashpw()



//   const checkpassword = bcrypt.compareSync("hello krishna", hash);

//   console.log(checkpassword);

// }


// bcryptjs("hello krishna");


const {ComparePassowerd,newpw} = require("./bcryptlibrary");


const password = newpw("krishna");

const comparepassword = ComparePassowerd("krishna",password);

console.log(comparepassword);





