class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 1: return 1
        substr, maxLength = '', 0
        for char in s:
            if char not in substr:
                substr += char
            else:
                maxLength = max(maxLength, len(substr))
                substr = substr[substr.find(char)+1:] + char
        return max(maxLength, len(substr))
