function twoSum(nums: number[], target: number): number[] {
    // Create a map to store numbers and their indices
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // Return the indices of the two numbers
            return [numMap.get(complement)!, i];
        }
        
        // Add the current number and its index to the map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array or throw an error
    return [];
}