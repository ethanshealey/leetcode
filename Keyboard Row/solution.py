class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        rows = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a','s','d','f','g','h','j','k','l'],
            ['z','x','c','v','b','n','m']
        ]
        passed = []
        for word in words:
            for row in rows:
                if all(x in row for x in list("".join(set(word)).lower())): passed.append(word)
        return passed
