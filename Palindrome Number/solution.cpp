#include <string> 

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0) return false;
        else if(x < 10) return true;
        else {
            string original = to_string(x), val = to_string(x);
            reverse(val.begin(), val.end());
            return original == val;
        }
    }
};
