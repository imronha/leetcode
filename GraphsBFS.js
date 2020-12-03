class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    // If vertex is not in adjlist, add it as a key and set val to []
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(start, destination) {
    if (!this.adjList[start]) {
      this.addVertex(start);
    }
    if (!this.adjList[destination]) {
      this.addVertex(destination);
    }

    this.adjList[start].push(destination);
    this.adjList[destination].push(start);
  }

  removeEdge(start, destination) {
    // Set this.adjList[start] to a filtered array that doesnt have destination vertex
    this.adjList[start] = this.adjList[start].filter(
      (vertex) => vertex !== destination
    );

    // Set this.adjList[destination] to a filtered array that doesnt have start vertex
    this.adjList[destination] = this.adjList[destination].filter(
      (vertex) => vertex !== start
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

/* 
Traversing a Graph using BFS

Psuedocode:
- initialize an empty queue, 'results' array, and 'visited' map
- add the starting vertext to the queue and visted map
- while queue is not empty
    - dequeue and store current vertex
    - push current vertext to result array
    - iterate through current vertex's adjacency list
        - for each adj vertex, if the vertex is not visited
            - add vertex to visited map
            - enqueue vertex
- return result array

*/
