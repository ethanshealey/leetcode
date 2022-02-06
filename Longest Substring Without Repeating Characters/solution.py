class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # if only 1 char return 1
        if len(s) == 1: return 1
        # set up variables
        substr, maxLength = '', 0
        # for each char
        for char in s:
            # if unique add char
            if char not in substr:
                substr += char
            else:
                # if not unique, record the length and remove
                # all characters up until the repeated one, then
                # add the character to the end
                maxLength = max(maxLength, len(substr))
                substr = substr[substr.find(char)+1:] + char
                
        # return the maximum length
        return max(maxLength, len(substr))
