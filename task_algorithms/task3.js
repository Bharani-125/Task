function rotateArray(arr, k) { 
 
    reverseArray(arr, 0, arr.length - 1); 
     
    reverseArray(arr, 0, k - 1); 
     
     
    reverseArray(arr, k, arr.length - 1); 
     
    return arr; 
    } 
     
    function reverseArray(arr, start, end) { 
    while (start < end) { 
    const temp = arr[start]; 
    arr[start] = arr[end]; 
    arr[end] = temp; 
    start++; 
    end--; 
    } 
    } 
     
     
    const inputArray = [1, 2, 3, 4, 5, 6, 7]; 
    const k = 3; 
    console.log("Rotated Array:", rotateArray(inputArray.slice(), k)); 
     
     
    const testArray = [3, 8, 9, 2, 5]; 
    const k2 = 2; 
    console.log("Rotated Array:", rotateArray(testArray.slice(), k2)); 