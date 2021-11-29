class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        tri = [[1]* i for i in range(1,rowIndex+2)]
        if rowIndex < 2: return tri[rowIndex]
        for i in range(2, len(tri)):
            for j in range(1, len(tri[i])-1):
                tri[i][j] = tri[i-1][j-1] + tri[i-1][j]
        return tri[-1]
