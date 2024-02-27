//Immediately Invoked Function Expression (IIFE)
(function chai(){
    console.log("DB Connected")
})(); //here we write ; to terminate function calling, it'll excutes only once but still we have to write ;

(function aurcode(){
    //named IIFE
    console.log("DB 2 connected")
})();

( (name)=>{
    //Unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`)
})('Chirag')

