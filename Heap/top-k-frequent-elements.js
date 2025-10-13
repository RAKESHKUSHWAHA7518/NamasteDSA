/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(arr, k) {
      let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = 0;
    map[arr[i]]++;
  }

  // Step 2: Min Priority Queue with frequency as priority
  let pq = new MinPriorityQueue(x => x.freq);

  for (let key in map) {
    pq.enqueue({ val: key, freq: map[key] });

    // Keep only top k frequent elements in the heap
    if (pq.size() > k) {
      pq.dequeue();  // remove the least frequent element
    }
  }

  // Step 3: Extract top k elements from the heap
  return pq.toArray().map(x => Number(x.val));
};