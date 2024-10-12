//----------------------------------------------MATRIX-----------------------------------------


// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
//     ]
    
    
// console.log(matrix[1][0])









class Graph {
    constructor(){
        this.aList = {}
    }
    
    addVertex(vertex){
        if(!this.aList[vertex]){
            this.aList[vertex] = new Set()
        }
    }
    addEdge(v1, v2){
        if(!this.aList[v1]){
            this.addVertex(v1)
        }
        if(!this.aList[v2]){
            this.addVertex(v2)
        }
        this.aList[v1].add(v2)
        this.aList[v2].add(v1)
    }
    display(){
        for(let vertex in this.aList){
            console.log(vertex + '->' + [...this.aList[vertex]])
        }
    }
    hasEdge(v1, v2){
        return this.aList[v1].has(v2) && this.aList[v2].has(v1)
    }
    removeEdge(v1, v2){
        this.aList[v1].delete(v2)
        this.aList[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.aList[vertex]){
            return
        }
        for(let aVertex of this.aList[vertex]){
            this.removeEdge(vertex , aVertex)
        }
        delete this.aList[vertex]
    }
    
    bfs(start, end){
        let queue = [[start]]
        let visited = new Set([start])
        
        while(queue.length > 0){
            let path = queue.shift()
            let node = path[path.length -1]
            if(node == end){
                return path
            }
            for(let neighbour of this.aList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push([...path, neighbour])
                }
            }
        }
        return null
    }
    
    dfs(start, visited = new Set()){
        visited.add(start)
        console.log(start)
        for(let neighbour of this.aList[start]){
            if(!visited.has(neighbour)){
                this.dfs(neighbour, visited)
            }
        }
    }
}



const graph = new Graph()
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.addEdge('D', 'B')


// graph.display()
graph.removeVertex('B')
graph.display()
console.log(graph.bfs('C', 'D'))

console.log(graph.hasEdge('C', 'D'))