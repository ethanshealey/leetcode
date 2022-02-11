class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None: 
            return False
        elif root.left is None and root.right is None and targetSum - root.val == 0: 
            return True
        else: 
            return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(root.right, targetSum - root.val)
