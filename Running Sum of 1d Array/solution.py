class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        return [sum(nums[0:x+1]) for x in range(len(nums))]
