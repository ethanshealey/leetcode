class Solution {
public:
    int maxArea(vector<int>& height) {
        int omax = -1, i = 0, j = height.size()-1;
        while(i < j) {
            omax = max(omax, min(height[i], height[j]) * (j-i));
            height[i] < height[j] ? i++ : j--;
        }
        return omax;
    }
};
