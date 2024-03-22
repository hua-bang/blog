class AVLNode {
  public value: number;
  public left: AVLNode | null;
  public right: AVLNode | null;
  public height: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // 默认为叶子节点，高度为1
  }
}
