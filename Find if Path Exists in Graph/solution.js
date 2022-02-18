const validPath = (n, edges, source, destination) => {
    
    // default case
    if(source === destination) return true
    
    // setup relationships
    const nodes = {}
    for(const [u, v] of edges) {
        if(nodes[u] === undefined) nodes[u] = new Set()
        if(nodes[v] === undefined) nodes[v] = new Set()
        nodes[u].add(v)
        nodes[v].add(u)
    }
    
    // setup set of visited locations
    const visited = new Set()
    
    // run recursive dfs
    const dfs = (x, t) => {
        if(visited.has(x) || !(x in nodes)) return false
        visited.add(x)
        const neighbors = nodes[x]
        if(neighbors.has(t)) return true
        return Array.from(neighbors).some((n) => dfs(n, t))
    }
    
    return dfs(source, destination)
    
}
