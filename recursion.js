//recursion: when function call itself
//otherwise it will get called for infinite time
//if a function call itself then there must be an end point;

//sorting using recursion function
// [2,3,1,4]
const sort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            console.log(arr[i],'>',arr[i+1])
            return false
        }
        
    }
    return true;
}

const sortCheck=(arr)=>{
    let i=0;
    let j=1;


    const sorting=()=>{
        if(sort(arr)){
            return;
        }else if( arr[i] <= arr[j]){
            j++;
            i++;
            sorting();
        }else{
            [arr[i],arr[j]] =[arr[j],arr[i]];
            i=0;
            j=1;
            sorting();
        }
    }
    sorting();
    return arr;
}

const x = sortCheck([2,5,8,8,9, 3, 1, 4])
console.log(x)
