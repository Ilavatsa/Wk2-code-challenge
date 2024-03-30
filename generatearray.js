
function generateArray(start, end) {
    // Initialize an empty array to store the  numbers
    let arr = [];
    
    // Loop from the start number to the end number(inclusive)
    for (let i = start; i <= end; i++) {
        // Add each number to the array
        numbers.push(i);
    }
    // Return the generated array
    return numbers;
}

console.log(generateArray(4, 7)); // [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
