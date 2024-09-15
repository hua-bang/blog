function pathEncryption(path: string): string {
  let str = "";

  for (let i = 0; i < path.length; i++) {
    if (path[i] === ".") {
      str += " ";
    } else {
      str += path[i];
    }
  }

  return str;
}
