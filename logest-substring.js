//Find the longest sub string 


const fn = (str) => {
    if (!str) return;

    let start = 0;
    let end = 0;
    let maxLength = 0;
    const set = new Set();

    while (end < str.length) {
        if (!set.has(str[end])) {
            set.add(str[end]);
            maxLength =Math.max(maxLength,set.size)
            end++;
        } else {
            set.delete(str[start])
            start++
        }
    }
    return maxLength
}

const x = fn('abcababb')
console.log(x)