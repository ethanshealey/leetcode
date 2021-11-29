class Solution:
    def reverseBits(self, n: int) -> int:
        reversed = [str(bin(n))[2::][::-1]]
        reversed.append('0' * (32 - len(reversed[0])))
        return int(''.join(reversed), 2)
