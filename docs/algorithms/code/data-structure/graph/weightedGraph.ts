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
}

const graph2 = new WeightedGraph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addEdge("A", "B", 1);
graph2.addEdge("A", "C", 2);
graph2.addEdge("B", "C", 3);

graph2.print();
