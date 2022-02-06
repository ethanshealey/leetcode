/**
 * @param {string} path
 * @return {boolean}
 */

const isVisited = (seen, cur) => seen.some(pos => pos.x === cur.x && pos.y === cur.y)

const isPathCrossing = (path) => {
    const visited = []
    const loc = {x: 0, y: 0}
    visited.push({x: loc.x, y: loc.y})
    for(let i = 0; i < path.length; i++) {
        path[i] === "N" ? loc.x++ :
        path[i] === "E" ? loc.y++ :
        path[i] === "S" ? loc.x-- :
        path[i] === "W" && loc.y--
        if(isVisited(visited, {x: loc.x, y: loc.y})) return true
        visited.push({x: loc.x, y: loc.y})
    }
    return false
}
