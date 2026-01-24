/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = currentSum + num; // 0 + number of array

        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
let result = getMaxSubSum([1, 4, -3, 4]);
console.log(result)
// currentSum = 0; num = 1
//currentSum = currentSum + num === 1
// if currentSum > maxSum; 1 > 0 = maxSum = currentSum === 1
//if currentSum < 0 = 1 < 0

// currentSum = 1; num = 4
//currentSum = currentSum + num === 5
// if currentSum > maxSum; 5 > 1 = maxSum = currentSum === 5
//if currentSum < 1 = 5 < 1

// currentSum = 5; num = -3
// currentSum = currentSum + num = 2
//if currentSum > maxSum; 2 > 5
//if current < 0; 2 < 0 

// currentSum = 2; num 4
// currentSum = currentSum + num === 6
// currentSum > maxSum; 6 > 5 = maxSum = currentSum == 6
//if currentSum < 0 = 6 < 0




function getMaxTemp(arr) {
    let maxTemp = 0;
    for (const temp of arr) {
        if (temp > maxTemp) {
            maxTemp = temp
        }
    }
    return maxTemp;
}
console.log(getMaxTemp([15, 22, 18, 30, 25, 20]))

// 15 > 0 maxtem = 15
// 15 > 22 
// maxtemp == 22
// 22 > 18 
// maxtemp == 22
// 22 > 30 
// maxtemp = 
// 



function getMinTemp(arr) {
    let minTemp = arr[0];// 15
    for (const temp of arr) {
        if (temp < minTemp) {
            minTemp = temp
        }
    }
    return minTemp;
}
console.log(getMinTemp([15, 22, 18, 30, 25, 20]))

*/

function getMaxSubSum(arr) {
    let currentSum = 0;
    let maxSum = 0;
    for (const sum of arr) {
        currentSum += sum;
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))

//  let arr [4, 55, 4, 44, -4]