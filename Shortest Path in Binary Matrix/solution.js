// create array of possible directions
const DIRECTIONS = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0],
    [-1,-1],
    [-1,1],
    [1,-1],
    [1,1]
]

const shortestPathBinaryMatrix = (grid) => {
    
    // default case -- if no starting area
    // end program
    if(grid[0][0] === 1) return -1
    
    // initialize the queue and length
    const queue = [[0,0,1]]
    const n = grid.length
    
    // initialize the seen set
    const seen = new Set('00')
    
    // location is valid if:
    //    * nr and nc do not exceed the play area
    //    * seen set does not contain the new node
    //    * the new node is not a 1
    const notValidLocation = (row, col) =>  row < 0 || row >= n || col < 0 || col >=n || seen.has(row + '' + col) || grid[row][col] === 1
    
    // while there still remains possible moves
    while(queue.length) {
        // get the row, col, and current step count from queue
        let [r, c, s] = queue.pop()
        // if reached end, return step count
        if(r === n-1 && c === n-1) return s
        // for each possible direction from node
        for(const direction of DIRECTIONS) {
            // get the new row and col
            let nr = r + direction[0]
            let nc = c + direction[1]
            // check if direction is valid
            if(notValidLocation(nr, nc)) continue
            // add new node to seen set
            seen.add(nr + '' + nc)
            // add new nodes to queue
            queue.unshift([nr, nc, s + 1])
        }
    }
    // no path found :(
    return -1
}
