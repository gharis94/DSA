//bubble sort
// o(n^2)

const bubbleSort=(arr)=>{
    for(let i=arr.length; i>0 ;i--){
        for(let j =0 ; j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }

    }
    return arr;
}

const x = bubbleSort([2,1,3,5,4,6])
console.log(x)