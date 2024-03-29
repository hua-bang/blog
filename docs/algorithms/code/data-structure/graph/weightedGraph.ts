type Vertex = string;
type Edge = { vertex: Vertex; weight: number };
type AdjacencyList = Map<Vertex, Edge[]>;

class WeightedGraph {
  private adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = new Map<Vertex, Edge[]>();
  }

  addVertex(vertex: Vertex): void {
    if (this.adjacencyList.get(vertex)) {
      return;
    }

    this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight = 1) {
    if (!this.adjacencyList.get(vertex1) || !this.adjacencyList.get(vertex2)) {
      return;
    }

    this.adjacencyList.get(vertex1)?.push({
      vertex: vertex2,
      weight,
    });

    this.adjacencyList.get(vertex2)?.push({
      vertex: vertex1,
      weight,
    });
  }

  print() {
    for (let [vertex, edges] of this.adjacencyList) {
      const edgeStr = edges
        .map((edge) => `${edge.vertex} (${edge.weight})`)
        .join(", ");
      console.log(`${vertex} -> ${edgeStr}`);
    }
  }

  BFS(vertex: Vertex) {
    const visited: Record<Vertex, boolean> = {};
    const queue: Vertex[] = [vertex];

    visited[vertex] = true;

    while (queue.length) {
      const currentVertex = queue.shift()!;
      console.log(`${currentVertex} `);

      const edge = this.adjacencyList.get(currentVertex);

      if (edge) {
        for (let i = 0; i < edge.length; i++) {
          const { vertex } = edge[i];
          if (vertex && !visited[vertex]) {
            queue.push(vertex);
            visited[vertex] = true;
          }
        }
      }
    }
  }

  DFS(vertex: Vertex) {
    const visited: Record<Vertex, boolean> = {};
    const DFSUtils = (targetVertex: Vertex) => {
      console.log(`${targetVertex} `);
      visited[targetVertex] = true;

      const edges = this.adjacencyList.get(targetVertex);

      if (edges) {
        for (let i = 0; i < edges.length; i++) {
          const { vertex: nextVertex } = edges[i];
          if (nextVertex && !visited[nextVertex]) {
            DFSUtils(nextVertex);
          }
        }
      }
    };

    DFSUtils(vertex);
  }
}

const graph2 = new WeightedGraph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addEdge("A", "B", 1);
graph2.addEdge("A", "C", 2);
graph2.addEdge("B", "D", 2);
graph2.addEdge("B", "C", 3);

graph2.print();
console.log("BFS:");
graph2.BFS("A");

console.log("DFS:");
graph2.DFS("A");
