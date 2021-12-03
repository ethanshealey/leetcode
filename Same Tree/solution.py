# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    
    def inOrder(self, root, lst):
        if root:
            lst.append(root.val)
            self.inOrder(root.left, lst)
            self.inOrder(root.right, lst)
        else:
            lst.append(None)
    
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        first, second = [], []
        self.inOrder(p, first)
        self.inOrder(q, second)
        return first == second
