class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        arr = list(filter(lambda x: arr.count(x) == 1, arr))
        return '' if len(arr) <= k-1 else arr[k-1]
