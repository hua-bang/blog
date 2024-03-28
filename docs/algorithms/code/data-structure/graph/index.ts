class Graph {
  private matrix: number[][];
  private vertices: string[];
  private verticesIndex: Map<string, number>;

  constructor(vertexCount: number) {
    this.matrix = new Array(vertexCount)
      .fill(null)
      .map(() => new Array(vertexCount).fill(0));
    this.vertices = [];
    this.verticesIndex = new Map<string, number>();
  }

  addVertex(vertex: string) {
    if (this.verticesIndex.has(vertex)) {
      return;
    }

    const index = this.vertices.length;
    this.vertices.push(vertex);
    this.verticesIndex.set(vertex, index);
  }

  addEdge(v1: string, v2: string, weight = 1) {
    const index1 = this.verticesIndex.get(v1);
    const index2 = this.verticesIndex.get(v2);

    if (index1 === undefined || index2 === undefined) {
      return;
    }

    this.matrix[index1][index2] = weight;
    this.matrix[index2][index1] = weight;
  }

  hasEdge(v1: string, v2: string) {
    const index1 = this.verticesIndex.get(v1);
    const index2 = this.verticesIndex.get(v2);

    if (index1 === undefined || index2 === undefined) {
      return false;
    }

    return this.matrix[index1][index2] !== 0;
  }

  print() {
    console.log(this.matrix);
  }

  BFS(startVertex: string): void {
    const startVertexIndex = this.verticesIndex.get(startVertex);
    if (startVertexIndex === undefined) {
      return;
    }

    const queue: number[] = [];
    const visited: boolean[] = [];

    queue.push(startVertexIndex);
    visited[startVertexIndex] = true;

    while (queue.length) {
      const currentIndex = queue.shift()!;

      console.log(`${this.vertices[currentIndex]} `);

      const targetMatrix = this.matrix[currentIndex] || [];

      for (let i = 0; i < targetMatrix.length; i++) {
        if (targetMatrix[i] && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  DFS(startVertex: string): void {
    const visited = new Array(this.vertices.length).fill(false);
    const DFSUtils = (idx: number) => {
      visited[idx] = true;
      console.log(this.vertices[idx]);

      for (let i = 0; i < this.matrix[idx].length; i++) {
        if (this.matrix[idx][i] && !visited[i]) {
          DFSUtils(i);
        }
      }
    };

    const startIdx = this.verticesIndex.get(startVertex);
    if (startIdx !== undefined) {
      DFSUtils(startIdx);
    }
  }
}

// 使用示例
const graph = new Graph(4);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.print();

console.log("BFS: ");
graph.BFS("A");

console.log("\nDFS: ");
graph.DFS("A");
