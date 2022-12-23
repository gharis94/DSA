//[1,2,3,4,3,5,4,6,7,8,] => total 10 elements 
//count largest sum of consecutive digits
//num = 4
// sum => 25

//condition 
//num > array => error message
//10-4+1 -> 7 loops

const largestSum =(arr,num)=>{
    if(arr.length <1 && num>0) return 
    let loop = arr.length - num ;
    let max=0;
    for(let i=0;i<=loop;i++){
        let sum=0;
        const fn=(n)=>{
            if(n<=0){
                return
            }else{
                console.log(sum,arr[i+n])
                //n-- 
                return sum+= arr[i+n] +fn(n-1)
            }
        }
        fn(num)
        console.log(sum)
    }
    return max
}

const x = largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8, ],4)
console.log(x)