class Solution {
    fun isPalindrome(x: Int): Boolean {
        if(x < 0) return false
        return x.toString() == x.toString().reversed()
    }
}
