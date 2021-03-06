public class Solution {
    public bool HasPathSum(TreeNode root, int targetSum) {
        if(root == null)
            return false;
        else if(root.left == null && root.right == null && targetSum - root.val == 0)
            return true;
        else return HasPathSum(root.left, targetSum - root.val) || HasPathSum(root.right, targetSum - root.val);
    }
}
