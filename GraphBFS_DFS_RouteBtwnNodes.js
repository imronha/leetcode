class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(val) {
    this.nodes[val] = this.nodes[val] || [];
  }

  addEdges(n1, n2) {
    this.nodes[n1].push(n2);
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);
graph.addNode(10);
graph.addNode(11);
graph.addNode(12);
graph.addNode(13);
graph.addNode(14);

graph.addEdges(1, 2);
graph.addEdges(1, 3);
graph.addEdges(2, 4);
graph.addEdges(4, 5);
graph.addEdges(4, 6);
graph.addEdges(6, 7);
graph.addEdges(7, 8);
graph.addEdges(7, 11);
graph.addEdges(3, 9);
graph.addEdges(3, 10);
graph.addEdges(9, 11);
graph.addEdges(9, 12);
graph.addEdges(9, 13);
graph.addEdges(11, 13);
graph.addEdges(11, 14);

console.log(graph);

const dfsRecursive = (graph, start, fn, visited = {}) => {
  const nodes = graph.nodes;
  fn(start);
  visited[start] = true;

  for (const neighbor of nodes[start]) {
    if (!visited[neighbor]) {
      dfsRecursive(graph, neighbor, fn, visited);
    }
  }
};

const bfs = (graph, start, fn) => {
  const nodes = graph.nodes;
  const q = [start];
  const visited = {};
  visited[start] = true;

  while (q.length) {
    const node = q.shift();
    fn(node);

    for (const neighbor of nodes[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
};

const log = (val) => console.log(val);

//dfsRecursive(graph, 1, log);
//bfs(graph, 1, log);

// Route between two nodes
const routeBetweenTwoNodes = (start, end, graph) => {
  const q = [start];
  const marked = {};
  marked[start] = true;

  while (q.length) {
    const node = q.shift();
    if (node === end) {
      return true;
    }

    for (const neighbor of graph.nodes[node]) {
      if (!marked[neighbor]) {
        marked[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
  return false;
};

routeBetweenTwoNodes(4, 14, graph);

// const pathBetween = (start, end, graph) => {
//   function isMatch(node) {
//     return node === end;
//   }
//   if(bfs(graph, start, isMatch)) {
//     return true;
//   } else {
//     return false;
//   }
// }
