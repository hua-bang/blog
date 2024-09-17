function findRepeatDocument(documents: number[]): number {
  documents.sort((a, b) => a - b);

  for (let i = 0; i < documents.length - 1; i++) {
    if (documents[i] === documents[i + 1]) {
      return documents[i];
    }
  }

  return -1;
}
