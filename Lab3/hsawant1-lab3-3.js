const sortNumbers = (arr) => arr.slice().sort((a, b) => a - b);

const arr1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(`Original Array: [${arr1}] Sorted Array: [${sortNumbers(arr1)}]`);

const arr2 = [10, 5, 8, 2, 1];
console.log(`Original Array: [${arr2}] Sorted Array: [${sortNumbers(arr2)}]`);

const arr3 = [7, 10, 7, 6];
console.log(`Original Array: [${arr3}] Sorted Array: [${sortNumbers(arr3)}]`);