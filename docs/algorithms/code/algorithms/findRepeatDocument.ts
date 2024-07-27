function findRepeatDocument(documents: number[]): number {
  const map: Record<number, number> = {};

  for (let i = 0; i < documents.length; i++) {
    if (map[documents[i]]) {
      return documents[i];
    }
    map[documents[i]] = 1;
  }

  return -1;
}

function findRepeatDocument(documents: number[]): number {
  documents.sort((a, b) => a - b);

  for (let i = 1; i < documents.length; i++) {
    if (documents[i] === documents[i - 1]) {
      return documents[i];
    }
  }

  return -1;
}
