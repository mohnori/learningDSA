function bubbleSearch(val) {
  let temp = null;
  let didSort = false;
  const arr = [...val];

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSort = true;
      }
    }
    if (!didSort) {
      break;
    }
  }
  return typeof val === "string" ? arr.join("") : arr;
}
console.log(bubbleSearch([3, 1, 2, 4, 5, 6, 7, 8, 9]));
console.log(bubbleSearch("fhshaaiw"));
console.log(bubbleSearch("mohammed nori"));
