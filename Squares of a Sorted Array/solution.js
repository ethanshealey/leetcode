const sortedSquares = (nums) => {
    nums.forEach((ele, i) => nums[i] = ele*ele)
    nums.sort((a, b) => (+a) - (+b))
    return nums
}
