/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var findSecondMinimumValue = function(root) {
    // BFS
    let visited = new Set(), queue = [], curr = root;
    queue.push(curr)
    while(queue.length) {
        curr = queue.shift()
        visited.add(curr.val)
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    const vis = [...(visited)].sort()
    if(vis.length < 2) return -1
    else return vis[1]
    
};
