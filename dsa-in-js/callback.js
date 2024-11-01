function modifyArray(arr, callback){
    arr.push(100)
}
var arr = [1,2,3,4,5]

modifyArray(arr, function(){
    console.log("array has been modified", arr)
})

const a = 0.1 + 0.2 === 0.3
console.log(`Output of a = ${a}`)

function func(){
    var priv = "secret code"
    return function(){
        return priv
    }
}
var getPriv = func();
console.log(func()())