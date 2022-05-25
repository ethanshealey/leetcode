const deepestLeavesSum = (root: TreeNode | null): number => {
    let d: number = 0, sum: number = 0
    
    const solve = (node: TreeNode | null, depth: number): void => {
        if(node.left === null && node.right === null) {
            if(depth > d) {
                d = depth
                sum = node.val
            }
            else if(d === depth) sum += node.val
            return
        }
        if(node.left) solve(node.left, depth+1)
        if(node.right) solve(node.right, depth+1)
    }
    
    solve(root, d)
    return sum
}
