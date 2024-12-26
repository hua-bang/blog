const reverseArr = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const rightHandedString = (s, k) => {
  const arr = s.split("");
  k = k % s.length;
  reverseArr(arr, 0, arr.length - 1);
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, arr.length - 1);

  return arr.join("");
}

