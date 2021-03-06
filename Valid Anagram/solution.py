class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        for char in s:
            if char in t:
                t = t.replace(char, '', 1)
            else: 
                return False
        return True
