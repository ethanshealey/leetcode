class Solution:
    def countBits(self, n: int) -> List[int]:
        return [str(bin(x)).count('1') for x in range(0, n+1)]
