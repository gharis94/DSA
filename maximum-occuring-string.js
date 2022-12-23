//Find the maximum occuring character in a given string


const getCharString=(str)=>{
    const obj=new Map();
    let maxCount=0;
    let maxKey 
    for(let char of str){
       // obj[char]=(obj[char] || 0)+1;
        if(!obj.has(char)){
            obj.set(char,1)
        }else{
            let count= obj.get(char)
            count++
            obj.set(char,count)
        }
    }
    for(let [key,value] of obj){
        if(value>maxCount){
            maxCount =value;
            maxKey=key
        }
    }

    return {[maxKey]:maxCount}
}

const getCharString2=(str)=>{
    const obj={};
    let strArr = str.split('');
    let maxCount=0;
    let maxKey;
    for(let char of strArr){
        obj[char] = (obj[char] ||0)+1;
    }

    for (let key in obj){
        if(obj[key]>maxCount){
            maxCount=obj[key];
            maxKey=key
        }
    }
    return {[maxKey]:maxCount}
}

const x=getCharString2('hello worldddddd')
console.log(x)