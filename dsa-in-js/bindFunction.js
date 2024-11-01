function fullName(){
    return "Hello, this is "+ this.first +" "+ this.last  
}

console.log(fullName())

var person = {
    first : "Jeffrey",
    last : "Dev"
}
console.log(fullName.bind(person)())