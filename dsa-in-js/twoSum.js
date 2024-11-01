/*An array and a number A is given. Determine if any 
two numbers within the array sum to A*/

function twoSum(arr, A) {
    const arr2 = []
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === A) {
                var num = [arr[i], arr[j]]
                arr2.push(num)
            }
        }
    }return arr2
}
console.log(twoSum([6,34,21,56,4,2,7,9,0,8,1,4,2,3,4,7],10))