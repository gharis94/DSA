//Divide and Conqurer technique
//find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15] ==> index6 ->output
/// o(logn)
const binarySearch=(arr,t)=>{
    let left =0;
    let right = arr.length-1;
    for(let i=0;i<arr.length;i++){
        let mid =Math.floor((left+right)/2);
        if(t === arr[mid]) return mid;
        else if(t>arr[mid]){
            left=mid+1;
        }else if(t<arr[mid]){
            right = mid-1;
        }
    }
    return 'not found'
}

const x = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15],4)
console.log(x)