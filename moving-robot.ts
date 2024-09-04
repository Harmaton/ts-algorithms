function robotSim(commands: number[], obstacles: number[][]): number {
    const dx = [0, 1, 0, -1]; // Direction vectors for North, East, South, West
    const dy = [1, 0, -1, 0];
    let x = 0, y = 0, direction = 0;
    let maxDistanceSquared = 0;

    // Convert obstacles to a Set for faster lookup
    const obstacleSet = new Set(obstacles.map(obs => `${obs[0]},${obs[1]}`));

    for (const command of commands) {
        if (command === -2) {
            // Turn left
            direction = (direction - 1 + 4) % 4;
        } else if (command === -1) {
            // Turn right
            direction = (direction + 1) % 4;
        } else {
            // Move forward
            for (let i = 0; i < command; i++) {
                const nextX = x + dx[direction];
                const nextY = y + dy[direction];
                
                // Check if next position is an obstacle
                if (obstacleSet.has(`${nextX},${nextY}`)) {
                    break;
                }
                
                x = nextX;
                y = nextY;
                
                // Update max distance
                maxDistanceSquared = Math.max(maxDistanceSquared, x*x + y*y);
            }
        }
    }

    return maxDistanceSquared;
}

// Test cases
console.log(robotSim([4,-1,3], [])); // Expected output: 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]])); // Expected output: 65
console.log(robotSim([6,-1,-1,6], [])); // Expected output: 36