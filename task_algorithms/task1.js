function removeDuplicates(nums) { 
    if (nums.length === 0) return 0; 
     
    let i = 0; // Pointer for unique elements 
    for (let j = 1; j < nums.length; j++) { 
    if (nums[j] !== nums[i]) { 
     
    i++; // Move pointer to the next unique element 
    nums[i] = nums[j]; 
    } 
    } 
    return i + 1; // Length of the array up to index i (including i) 
    } 
     
    const inputArray = [1, 1, 2, 2, 3, 4, 4, 5]; 
    console.log("New Length:", removeDuplicates(inputArray)); 
     
    const testInputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]; 
    console.log("New Length in Test Input:", removeDuplicates(testInputArray)); 