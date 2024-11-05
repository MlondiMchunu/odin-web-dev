//1. Repeat Method : repeats string (x) times
const message = 'W'
const repeatIt = message.repeat(5)
console.log(repeatIt)

//2. Trim Method : removes whitespace characters from start and end of the string
const beforeAndAfter = '  Hi There  '
console.log('1 - trim method: '+ beforeAndAfter.trim())
console.log('2 - does not change the original content: '+beforeAndAfter)

//3. To UpperCase & To LowerCase
const fname = 'ANDY'
const lname = 'Garcia'
console.log(fname.toLocaleLowerCase())
console.log(lname.toUpperCase())

//4. Includes : takes only one parameter: the substring we want to search the current string
const occupation = "Web Developer"
if(occupation.includes("Dev")){
    console.log(`Yes, it does`)
}else{
    console.log(`Nope, I can't find Dev here!`)
}
//5. Slice : extracts substring from the original string
const myOccupation = `Developer`
console.log(myOccupation.slice(0,4))