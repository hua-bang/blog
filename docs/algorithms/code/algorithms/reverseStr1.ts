function reverseStr(s: string, k: number) {
  const arr = [...s];

  for(let i = 0; i < s.length; i = i + 2 * k) {
    const left = i;
    const right = Math.min(i + k - 1, s.length - 1);
    reverseArr(arr, left, right);
  }

  return arr.join("");
}

function reverseArr(arr: string[], left: number, right: number) {
  while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}