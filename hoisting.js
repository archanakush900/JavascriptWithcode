// // nested scope 

// function one(){//this is called closer because parent ko child call kr lete hai
//     const username="archana"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }

//     //console.log(website);//ye nhi hoga its wrong
//     two()// agr to ko excute nhi kreng to one hoga hi nhi
// }
//one()
// console.log(username);



///----------------if else

// if(true){
//     const username="archana"
//     if(username==="archana"){
//         const website="  youtube"
        //console.log(username+website);
    //}
    //console.log(website);//glt
//}
// console.log(username); this wrong
//+++++++++++++++++++++++++++++++hoisting=====
console.log(addone(5))
function  addone(num){
    return num+1
}
//addTwo(5)like this one

const addTwo=function(num){//jab koi varoiable me fn ko store krte hain to phle call nhi kr sakte
    return num+2
}
addTwo(5)






