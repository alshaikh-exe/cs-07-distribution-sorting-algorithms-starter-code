function bucketSort(arr, bucketSize) {

  if (arr.length === 0) return arr;

  let min = arr[0]
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    else if (arr[i] > max) {
      max = arr[i]
    }
  }

  bucketSize = bucketSize || 5;
  let bucketCount = Math.floor((max - min) / bucketSize) + 1
  let buckets = new Array(bucketCount).fill(null).map(() => [])

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
  }
  return arr;
}

module.exports = bucketSort;
