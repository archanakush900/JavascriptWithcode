//there are two typr of datatype

//1.primitive
//7type: String,Number, Boolean, null Undefined,Symbol,BigInt


// const number1=1233
// const isLoggedIn=false
// const outsideTeam=null
// let usereEmail;
// const id=symbol('234')
// const anotherid=symbol('234')
// const Bigint=1234567890;



//2.reference(Non primitive)
//3type:Array,Object, Function

// const heros=["tiger","darshan","jaya"]//array

let myobj={
   name:"archana",
    Boolean:false,
    age:55,
 


}//object
console.log(typeof myobj);

//function ko javascript me variable k trh treat kr sakte hain
// function declare
//function(){}
// const myFunction=function(){
//     console.log("heloo")
// }
//function hi fun hi   return krta hai acutually me mana jata hai fun obj



//+++++++++++++++++++++Memory+++++++++++++

//stack(primitive) and heap memory(non-primitive)
let myyoutub="arcvbnm"
let anothemy=myyoutub
anothemy="sdfghjkl"
console.log(anothemy)
console.log(myyoutub)