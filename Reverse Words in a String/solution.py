class Solution:
    def reverseWords(self, s: str) -> str:
       return ' '.join([x for x in s.split(' ') if x is not ''][::-1])
