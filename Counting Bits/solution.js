const countBits = (n) => {
    const ans = [0]
    for(let i = 1; i <= n; i++) 
        ans.push((i >>> 0).toString(2).replace(/[^1]/g, '').length)
    return ans
}
