//esme janege this keyword and arrow function
//this current context me aata hai eg curly bracesew
// arrow fuction me this nhi hota pr kyu nhi hota hai

// const user={
//     username:"archana",
//     price:999,
//    welcomeMessage: function(){
// console.log(`${this.username},welcome to website`);
// console.log(this);

//    } 
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);
//----------------------------------
// function chai(){
//     console.log(this.username)//output undefined aa raha ye this keyword obj k andr kam krta hai

// }
// chai()
//-================================================



// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }
//chai()

//===================

const chai=()=>{
    let username="hitesh"
    console.log(this.username);
}
// chai()

//-----------arrow function
// const addTow=(num1,num2)=>{
//     return num1+num2
// }//basic arrow function

// const addTow=(num1,num2)=> num1+num2
// const addTow=(num1,num2)=>(num1+num2)
 //aise likhe to parethisi nhi likhna hoga

 const addTow=(num1,num2)=>({username:"archana"})//agr obj return krna hoga to

console.log(addTow(3,4))

// const myArray=[3,5,6,7,8]
// myArray.forEach(()=>{

// })
