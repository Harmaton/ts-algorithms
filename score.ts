function calPoints(ops: string[]): number {
    const scores: number[] = [];

    for (const op of ops) {
        if (op === '+') {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        } else if (op === 'D') {
            scores.push(scores[scores.length - 1] * 2);
        } else if (op === 'C') {
            scores.pop();
        } else {
            scores.push(parseInt(op));
        }
    }

    return scores.reduce((sum, score) => sum + score, 0);
}

// Test the function
console.log(calPoints(["5","2","C","D","+"])); // Expected output: 30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])); // Expected output: 27