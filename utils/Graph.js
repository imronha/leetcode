// var Graph = function () {
//   this.nodes = {};
// };

// Graph.prototype.addEdge = function (node, edge) {
//   if (this.nodes[node] === undefined) {
//     return "node does not exist";
//   } else if (this.nodes[node][edge]) {
//     return `edge ${node}-${edge} already exists`;
//   } else {
//     this.nodes[node][edge] = true;
//   }
// };

// Graph.prototype.addNode = function (value) {
//   if (this.nodes[value] !== undefined) {
//     return `node of value ${value} already exists`;
//   } else {
//     this.nodes[value] = {};
//   }
// };

// Graph.prototype.findEdges = function (node) {
//   if (this.nodes[node] === undefined) {
//     return "node does not exist";
//   } else {
//     return this.nodes[node];
//   }
// };

// Graph.prototype.hasEdge = function (node, edge) {
//   if (this.nodes[node] === undefined) {
//     return false;
//   } else {
//     return this.nodes[node][edge] !== undefined;
//   }
// };

// Graph.prototype.hasNode = function (node) {
//   return this.nodes[node] !== undefined;
// };

// Graph.prototype.removeEdge = function (node, edge) {
//   if (this.nodes[node] === undefined) {
//     return "node does not exist";
//   } else {
//     delete this.nodes[node][edge];
//   }
// };

// Graph.prototype.removeNode = function (node) {
//   if (this.nodes[node] === undefined) {
//     return "node does not exist";
//   } else {
//     delete this.nodes[node];
//     for (var currNode in this.nodes) {
//       if (this.nodes[currNode][node] !== undefined) {
//         delete this.nodes[currNode][node];
//       }
//     }
//   }
// };

// module.exports = Graph;

class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map();
  }

  // Add vertex to graph
  addVertex(v) {
    // Initialize the adjacent list with an empty array
    this.adjList.set(v, []);
  }

  // Adds an edge between source(v) and destination(w)
  addEdge(v, w) {
    // Get the list for vertex v and
    // put the vertex w denoting the  edge between v and w
    this.adjList.get(v).push(w);

    // Since graph is undirected,
    // Add an edge from w to v also
    this.adjList.get(w).push(v);
  }

  printGraph() {
    // Get all the vertices
    var get_keys = this.adjList.keys();

    // Iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.adjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
  // BFS(v)
  // DFS(v)
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
