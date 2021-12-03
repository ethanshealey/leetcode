class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        return '-'.join([''.join(S.upper().split('-'))[::-1][i:i+K] for i in range(0, len(''.join(S.upper().split('-'))[::-1]), K)])[::-1]
