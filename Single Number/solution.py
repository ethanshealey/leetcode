class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        found_items = {}
        for num in nums:
            if str(num) in found_items.keys():
                found_items[str(num)] += 1
            else:
                found_items[str(num)] = 1
        lowest, lowest_count = next(iter(found_items.items()))
        for key, val in found_items.items():
            if val < lowest_count: 
                lowest = key
                lowest_count = val
        return lowest
