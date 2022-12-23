//count unique number
//given array is sorted
//[1,1,2,2,3,4,4,5,6,7,8,8]
//output=>8
//o(n)

//hashmap approach
const uniqueNum =(arr)=>{
    const obj={}

    for(num of arr){
        if(!obj[num]){
            obj[num] =1
        }
    }
    let arr1= Object.keys(obj)
    
    return arr1.length
}

//two pointer approach for returning no of unique element

const uniqueNum2=(arr)=>{
    let i=0;
    let j=1;
    let count=0;
    while(j <= arr.length){
        if(arr[i] ===arr[j]){
            j++
        }else if(arr[i] !== arr[j]){
            count++;
            
            i=j;
        }else if(j===arr.length){
            count++
        }
    }
    return count;
}

//two pointer approach for returning orignal array of unique value

const uniqueNum3=(arr)=>{
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i] === arr[j]){
            j++
        }else if(arr[i] !== arr[j] ){
            i++
            arr[i]=arr[j]
        }
    }
    arr.splice(i+1)
    return arr
}

const x = uniqueNum3([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8,9,10])
console.log(x)