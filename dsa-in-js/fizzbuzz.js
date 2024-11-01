function fizzbuzz(n) {
    const arr = []
    for (num = 1; num < n; num++) {

        if (num % 3 === 0 && num % 5 == 0) {
            arr.push("fizzbuzz")      
        }
        else if (num % 3 === 0) {
            arr.push("fizz")
            
        } else if (num % 5 === 0) {
            arr.push("buzz")
            
        }  else {
            arr.push(num.toString())          
        }
    }return arr
    

}
console.log(fizzbuzz(100))
console.log(1%5)