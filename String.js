// const name='archana';
// const repo=68;

 // console.log(name+repo+"value") its old matheod

// console.log(`helo my name is ${name} and my repo is ${repo}`);

const gameName=new String("archana")
// console.log(gameName.__proto__);

//console.log(gameName.length);//obj
//console.log(gameName.toUpperCase);// objects 
//console.log(gameName.toLowerCase);//obj
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// const newString=gameName.substring(0,4)
// console.log(newString)

//slice me negative number bhi de sakte hain
// const anotherString= gameName.slice(-8,2)
// console.log(anotherString)

// trim methods space vegra jyda use ho jata hai ye sab faltu space no need
// const newStringOne="   archana  ";


// console.log(newStringOne.trim());

const url="https://archana.com/archi%20maurya"
console.log(url.replace('%20','-'))
console.log(url.includes('archana'))

