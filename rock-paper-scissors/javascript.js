console.log("Hello World")

const isInt = (num)=>{
    //parseInt(prompt("Enter a number"))

    if(num % 1 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
isInt(45);

(function(){
    var a = b = 5;
})()
console.log(b);

function fullName(){
    return "Hello, this is " + this.first + " " + this.last
}
console.log(fullName());

var person = {
    first: "Foo", 
    last: "Bar"};
console.log(fullName.bind(person)());

function doSomething(val){
    "use strict";
    const x = val + 10
    return x
}
console.log(doSomething(4))