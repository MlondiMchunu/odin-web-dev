function fullName(){
    return `Hello, this is ${this.first} ${this.last}` 
}

console.log(fullName())

const person = {
    first : "Jeffrey",
    last : "Dev"
}
