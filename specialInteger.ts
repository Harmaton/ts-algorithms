
function SpecialInteger(K: number[]): number {
    // Sort the array in descending order
    K.sort((a, b) => b - a);

    // Iterate through the sorted array
    for (let x = 0; x < K.length; x++) {
        // If the current element is greater than or equal to the index + 1
        if (K[x] >= x + 1) {
            // If the next element is less than the index + 1 or we are at the end of the array
            if (x === K.length - 1 || K[x + 1] < x + 1) {
                return x + 1;
            }
        }
    }

    // If we don't find any special number, we return -1
    return -1;
}

function SpecialIntegerON2(K: number[]): number | null {
    // We look at each number in the list K
    for(let x = 0; x <= K.length; x++){
        // Count how many numbers in K are greater than or equal to x
        let count = 0;
        for(let i = 0; i < K.length; i++){
            if(K[i] >= x){
                count++;
            }
        }

        // If the count is equal to x, we found our special number
        if(count === x){
            return x;
        }
    }

    // If we don't find any special number, we return -1
    return -1;
}