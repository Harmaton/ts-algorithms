function containerWithMostWaterON2(height: number[]): number{
     let area = 0;

     const len = height.length

     for(let i=0; i < len ; i++){
       
        for(let j = i; j<len; j++){
            const min = Math.min(height[i], height[j])
            const steps = Math.abs(i-j)
            const amount = min * steps
            area = Math.max(area, amount)
        }
     }

     return area
}

function maxArea(height: number[]): number{
    let indexA = 0
    let indexB = height.length - 1
    let area = 0

    while(indexA < indexB){
        const min = Math.min(height[indexA], height[indexB])

        const steps = Math.abs(indexA - indexB)

        const cansidatearea = min * steps

        area = Math.max(area, cansidatearea)

        height[indexA] <= height[indexB] ? indexA++ : indexB--

    }


   return area
}