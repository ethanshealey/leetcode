/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void getLeftmostValue(int& v, TreeNode* tree, string prev) {
        if(prev == "left" && tree->left == nullptr && tree->right == nullptr) {
            v += tree->val;
        }
        else {
            if(tree->left != nullptr) {
                getLeftmostValue(v, tree->left, "left");
            }
            if(tree->right != nullptr) {
                getLeftmostValue(v, tree->right, "right");
            }
        }
    }

    int sumOfLeftLeaves(TreeNode* root) {
        int value = 0;
        getLeftmostValue(value, root, "root");
        return value;
    }
};
