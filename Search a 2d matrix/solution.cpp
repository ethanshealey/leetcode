class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        for(int i = 0; i < matrix.size(); i++) {
            if(target >= matrix[i][0] && target <= matrix[i].back()) {
                for(int x: matrix[i]) {
                    if(target == x) return true;
                }
            }
        }
    return false;
    }
};
