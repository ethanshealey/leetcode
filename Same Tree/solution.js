/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


const inOrder = (root, lst) => {
    if(root?.val !== undefined) {
        lst.push(root.val)
        inOrder(root.left, lst)
        inOrder(root.right, lst)
    }
    else
        lst.push('N')
    
}

const isSameTree = (p, q) => {
    let first = [], second = []
    inOrder(p, first)
    inOrder(q, second)
    console.log(first, second)
    return first.every((v, i) => v === second[i])
};
