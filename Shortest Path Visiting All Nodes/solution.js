const shortestPathLength = (graph) => {
    const n = graph.length, fbm = (1 << n) - 1
    let queue = [], visited = new Set()
    for(let i = 0; i < n; i++) {
        queue.push([i, 1<<i])
        visited.add(`${i},${i << n}`)
    }
    let steps = 0
    while(queue.length) {
        let next = []
        while(queue.length) {
            let [node, bitmask] = queue.pop()
            if(bitmask === fbm) return steps
            for(const neighbor of graph[node]) {
                let nbm = bitmask | (1 << neighbor)
                if(!visited.has(`${neighbor},${nbm}`)) {
                    next.push([neighbor, nbm])
                    visited.add(`${neighbor},${nbm}`)
                }
            }
        }
        queue = next
        steps++
    }
}
