const numOfColors = (nums) => {
    // init color array
    const colors = [0, 0, 0]
    // foreach value increment
    // which value is present
    nums.forEach((val) => {
        val === 0 ? colors[0]++ :
        val === 1 ? colors[1]++ :
        val === 2 && colors[2]++
    })
    return colors
}

const sortColors = (nums) => {
    // destruct colors into variables
    const [r, w, b] = numOfColors(nums) 
    // reset array in place
    nums.length = 0
    // repopulate array in order
    for(let i = 0; i < r; i++) nums.push(0)
    for(let i = 0; i < w; i++) nums.push(1)
    for(let i = 0; i < b; i++) nums.push(2)
}

/** Funny solution

const sortColors = (nums) => {
    nums.sort()
}
*/
