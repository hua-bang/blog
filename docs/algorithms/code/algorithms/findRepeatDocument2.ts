function findRepeatDocument(documents: number[]): number {
  const record: Record<number, boolean> = {};

  for(let i = 0; i < documents.length; i++) {
    if(record[documents[i]]) {
      return documents[i];
    } else {
      record[documents[i]] = true;
    }
  }

  return -1;
};