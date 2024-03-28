function findMissingNumber(arr) { 
    const n = arr.length + 1; 
    const totalSum = (n * (n + 1)) / 2; 
     
    const arraySum = arr.reduce((acc, curr) => acc + curr, 0); 
     
    const missingNumber = totalSum - arraySum; 
     
    return missingNumber; 
    } 
     
    const inputArray = [1, 2, 3, 4, 6, 7, 8]; 
    console.log("Missing Number:", findMissingNumber(inputArray)); 
     
    const testInputArray = [1, 3, 4, 5, 6, 7, 8, 9, 10]; 
    console.log("Missing Number in Test Input:", findMissingNumber(testInputArray)); 