function dismantlingAction(arr: string): string {
  const map: Record<string, number> = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] = map[arr[i]] + 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }

  return " ";
}
