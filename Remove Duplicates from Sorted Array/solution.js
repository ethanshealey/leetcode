const removeDuplicates = (nums, i = 0) => {
    while(nums[i] !== undefined) nums[i] === nums[i+1] ? nums.splice(i, 1) : i++
}
