//Merge Sort 


//Ascending Order
const mergeSort =(arr)=>{
    if(arr.length<2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right))
};

const merge=(left,right)=>{
    let sortedArr =[];

    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else if(right[0]<left[0]){
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}


//Descending Order

const mergeSort2=(arr)=>{
    if(arr.length<2) return arr;
    let mid = Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    return merge2(mergeSort2(left),mergeSort2(right));
}

const merge2=(left,right)=>{
    let sortedArr=[];
    while(left.length && right.length){
        console.log(left,right)
        if(left[0]>right[0]){
            sortedArr.push(left.shift())
        }else if(right[0] > left[0]){
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...right,...left]
}

const x = mergeSort2([2, 1, 8, 5, 9, 4])
console.log(x)