//checking sum zero  [-5,-4,-3,-2,0,2,4,6,8] -->input
// [-4,4] output
//given array is sorted
//time complexity 0(n)

//this is pointer approach
const fn=(arr)=>{
    let left =0;
    let right = arr.length-1;

    while(left < right){
        if(arr[left] + arr[right] === 0) return [arr[left],arr[right]];
        else if (arr[left] + arr[right] > 0 ){
            right--;
        } else if (arr[left] + arr[right] < 0){
            left++
        }
    }
    return 'not found'
}

const x = fn([-5, -4, -3, -2, 0, 12, 14, 16, 18]);
console.log(x);