/**
 * @param {string} path
 * @return {boolean}
 */

// simple function to find if positon had been visited
const isVisited = (seen, cur) => seen.some(pos => pos.x === cur.x && pos.y === cur.y)

const isPathCrossing = (path) => {
    // init empty array
    const visited = []
    // init location to 0,0 and add it to visited
    const loc = {x: 0, y: 0}
    visited.push({x: loc.x, y: loc.y})
    // for each movement
    for(let i = 0; i < path.length; i++) {
        // determine the direction and update
        // the position object
        path[i] === "N" ? loc.x++ :
        path[i] === "E" ? loc.y++ :
        path[i] === "S" ? loc.x-- :
        path[i] === "W" && loc.y--
        // if visiting previosuly seen location return true
        if(isVisited(visited, {x: loc.x, y: loc.y})) return true
        // if not add location to array
        visited.push({x: loc.x, y: loc.y})
    }
    return false
}
