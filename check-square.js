//checking square in another array
// arr1=[1,2,3,4] arr2=[1,9,4,16]
//o(n)

const checkSqr =(arr1,arr2)=>{
    if(arr1.length !== arr2.length) return 'length is not same';

    let obj={}
    for(let a of arr1){
        obj[a] = (obj[a] || 0) +1;
    }
    for(let b of arr2){
        let sqt = Math.sqrt(b)
        if(obj[sqt]){
            obj[sqt] -=1
        }else{
            return false;
        }
    }
    console.log(obj)
    return  true;
}

const checksqr2 =(arr1,arr2)=>{
    if(arr1.length !== arr2.length) return 'not same length';
    const map1={};
    const map2={};

    for(let item of arr1){
        map1[item] = (map1[item] || 0) +1;
    }

    for(let item of arr2){
        map2[item] = (map2[item] || 0) +1;
    }

    for(let key in map1){
        if(!map2[key*key]) return false;
        if(map1[key] !== map2[key*key]) return false;
    }
    return true;
}
const x = checksqr2([1, 2, 2, 4], [1, 4, 4, 25])
console.log(x);
