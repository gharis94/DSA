//string anagram
// hello => llheo

//conditions
//length of both string must be same
//O(n)

const Anagram =(str1,str2)=>{
    if(str1.length !== str2.length) return 'not same length'
    const obj ={};
    for(a of str1){
        // if(!obj[a]){
        //     obj[a]=1
        // }else{
        //     obj[a] +=1;
        // }
        obj[a] = (obj[a]||0) +1;
    }
    for (b of str2){
        if(!obj[b]){
            obj[b]=1
        }else{
            obj[b] -=1;
        } 
    }
    let result = Object.values(obj).filter(x=>x!==0)
    if(result.length ===0) return true;
    return false
}

const x=Anagram('gharis','harisg')
console.log(x);