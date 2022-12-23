//insertion sort
//steps
//1 consider 2nd element as starting point
// compare with the left side element, if left is greater then swap otherwise swap


const insertionSort = (arr) => {
    const l= arr.length
    for (let i = 1; i < l; i++) {
        let cur = arr[i]; 
        let j = i - 1; //2

        while (j >= 0 && arr[j] > cur) { //true 8>1 true 4>1 2>1
            arr[j + 1] = arr[j];
            j--;
            console.log('j',j)
        }
        arr[j + 1] = cur; //arr[0] = 1 

    }
    return arr;
}

const x = insertionSort([8, 2, 4, 1, 3])
//[2,8,4,1,3]
//[2,4,8,1,3]
//[1,2,4,8,3]
console.log(x)