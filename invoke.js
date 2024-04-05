//immediately invoked fuction expressions(IIFE)

(function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();//same here

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("archana");//same here