

// var removeDuplicates = function (nums) {
//     let count = 0;
//     let i = 0;
//     let j = 1

//     while (j < nums.length) {
//         if (nums[i] === nums[j]) {
//             console.log(nums, nums.length, i, j)
//             nums.splice(i, j)
//             //console.log(nums, nums.length)
//             i = 0; //[0,1,1,1,2,2,3,3,4] [0,1,1,2,2,3,3,4] [0,1,2,2,3,3,4]
//             // i++;
//             // j++
//             j = 1;
           
//         } else {
//             j++
//             i++
//         }
//     }
//      console.log(nums)
//     // console.log(nums.length)
//     return nums.length
// };

// const x = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// console.log(x)


var plusOne = function (digits) {
    
    let l = digits.length-1
    //console.log(l)
    for (let i= l; i >= 0; i--) {
        //console.log(i)
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            //console.log(digits)
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return digits.unshift(1)
};

 const x=plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
console.log(x)