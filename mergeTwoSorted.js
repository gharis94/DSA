
var merge = function (nums1, m, nums2, n) {
    if (n === 0) return nums1;
    if (m === 0) return nums2;
    nums1.splice(n, n, ...nums2);
    console.log(nums1)

    const mergeSort = (arr) => {
        if (arr.length < 2) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        console.log(mid,left,right)

        return fn(mergeSort(left), mergeSort(right))
    }
    const fn = (left, right) => {
        let sorted = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sorted.push(left.shift())
            } else if (right[0] < left[0]) {
                sorted.push(right.shift())
            }else if(left[0] ===right[0]){
                sorted.push(left.shift())
            }
            console.log('s',sorted)
        }
        return [...sorted, ...left, ...right]
    }
    let x =mergeSort(nums1)
    console.log('x',x)
};

//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6],3)