
const foodA =["Noodle","Pasta","Ice Cream"];
const foodB =["Fries","Pizza","Pasta","Ice Cream"]


foodFinder=(A,B)=>{
     return  A.filter((element)=> B.includes(element));
};
 const value = foodFinder(foodA,foodB);
 console.log(value);





 