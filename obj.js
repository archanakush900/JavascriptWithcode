//singleton  apne trh ek hi object hai 
//important bat jab hum litral ki trh declare krte hain to signleton nhi banta 
//constractor se banega to humesha singleton banega


//Object.create//essi ko bolte hain constractor ki trh esme hi singleton use hota hai



//object literals

const mySym=Symbol("key1")
const jsuser={
    Name:"archna",
    age:27,
    [mySym]:"mykey1",
    location:"archa@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","sunday"]
}
console.log(typeof jsuser.mySym)
console.log(jsuser[mySym])
console.log(typeof jsuser[mySym])

jsuser.Name="maurya"
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello JS user")

}
jsuser.greetingTwo=function(){
    console.log(`Hello JS user,${this.Name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());