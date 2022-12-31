//Qick Sort 

//ascending 
const quickSort=(arr)=>{
    if(arr.length < 2) return arr;
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        console.log(pivot,left,right)
        if(pivot > arr[i]){
            left.push(arr[i])
        }else if(pivot<arr[i]){
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

//decending

const quickSort2=(arr)=>{
    if(arr.length<2) return arr;
    let pivot = arr[arr.length-1];
    let left=[];
    let right=[];
    
    for(let i=0;i<arr.length-1;i++){
        console.log(pivot,arr[i])
        if(pivot<arr[i]){
            right.push(arr[i])
        }else if(pivot>arr[i]){
            left.push(arr[i])
        }else if(pivot === arr[i]) {
            left.push(arr[i])
        }
    }
    return[...quickSort2(left),pivot,...quickSort2(right)]
}
const x = quickSort2([1, 2, 3, 2, 5, 6])
console.log(x);