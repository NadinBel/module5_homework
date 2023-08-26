
let arr = [2, 2, 2, 2, 2, 'a'];
let setFromArray = new Set(arr);
if (setFromArray.size === 1) {
    console.log('true')
} else {
   console.log('false')
}
let value = 'true';
for (let i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
         value = false;
            break
}} console.log(value);


