/*1 Linear search: 
    Linear search is a simple searching algorithm that sequentially checks each element in a list until a match is found or the entire list has been searched.
*/

import { useEffect, useState } from "react";
  
export function LineirSearch({arr,target}) {
  let response = -1
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      response = index; // Return the index of the target if found
    }
  }

  return (
    <div>
      <h3>Lineir Search Algoritm</h3> 
      <div>input = {arr}</div>
      <div>finding output index is {response}</div>
    </div>
  )
}

export function HashingSearch({ arr: myArray, target }) {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    function createHashTable(arr) {
      const hashTable = {};
      arr.forEach((value, index) => {
        hashTable[value] = index;
      });
      return hashTable;
    }

    const hashTable = createHashTable(myArray);
    const targetIndex = hashTable[target];
    setIndex(targetIndex);
  }, [myArray, target]);

  return (
    <div>
      <h3>Hashing Search Algorithm</h3>
      <div>
        Input: {myArray.join(', ')}, Target is {target}
      </div>
      <div>Finding output index: {index}</div>
    </div>
  );
}

export function BinarySearch({ arr, target }) {
  let response = -1;

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      response = mid; // Return the index of the target if found
      break;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return (
    <div>
      <h3>Binary Search Algorithm</h3>
      <div>Input: {arr.join(', ')}, Target is {target}</div>
      <div>Finding output index: {response}</div>
    </div>
  );
}

export function RecursiveBinarySearch({ arr }) {
  const [output,setOutput] = useState([])
  const target = 2

  function binary_search_recursive(inputArr, start, end) {
    const mid = Math.floor((start + end) / 2)
    if(start > end ) {return -1}
    if(inputArr[mid] === target) {return mid}



    if (inputArr[mid] > target) {
      return binary_search_recursive(inputArr, start, mid - 1); 
    } else if (inputArr[mid] < target) {
      return binary_search_recursive(inputArr, mid + 1, end); 
    } 
  }

  useEffect(() => {
    const end = arr.length - 1
    const start = 0
    setOutput(binary_search_recursive(arr,start,end,target))
  },[])



  return (
    <div>
      <h3>RecursiveBinarySearch Algorithm</h3>
      <div>Input: {arr.join(', ')}, Target is {target}</div>
      <div>Finding output index: {output}</div>
    </div>
  );
}

export function TernarySearch({ arr: sortedArray, target }) {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const ternarySearch = () => {
      let start = 0;
      let end = sortedArray.length - 1;

      while (start <= end) {
        const mid1 = start + Math.floor((end - start) / 3);
        const mid2 = end - Math.floor((end - start) / 3);
        if (sortedArray[mid1] === target) {
          setIndex(mid1);
          return;
        }

        if (sortedArray[mid2] === target) {
          setIndex(mid2);
          return;
        }

        if (target < sortedArray[mid1]) {
          end = mid1 - 1;
        } else if (target > sortedArray[mid2]) {
          start = mid2 + 1;
        } else {
          start = mid1 + 1;
          end = mid2 - 1;
        }
      }

      setIndex(-1);
    };

    ternarySearch();
  }, [sortedArray, target]);

  return (
    <div>
      <h3>Ternary Search Algorithm</h3>
      <div>
        Input: {sortedArray.join(', ')}, Target is {target}
      </div>
      <div>Finding output index: {index}</div>
    </div>
  );
}

// Example usage of DFS in a functional component with an array
export function DFSArrayExample({nestedArray}) {
  const [result, setResult] = useState([]);

  const depthFirstSearchArray = (array, callback) => {
    array.forEach(item => {
      if (Array.isArray(item)) {
        depthFirstSearchArray(item, callback); 
      } else {
        callback(item);
      }
    });
  };


  useEffect(() => {
    const visitedItems = [];
    depthFirstSearchArray(nestedArray, item => visitedItems.push(item));

    setResult(visitedItems);
  }, []);

  return (
    <div>
      <h2>Depth-First Search on Array Example</h2>
      <div>Result: {result.join(' == ')}</div>
    </div>
  );
};

export function HashingTextSearch() {
  function hash(key, arrayLength) {
    let total = 0;
    for (let char of key) {
      // Map 'a' to 1, 'b' to 2, etc.
      let value = char.charCodeAt(0)
      total = (total + value) % arrayLength;
    }
    return total;
  }

  function createHashTable(size = 53) {
    const keyMap = new Map();
  
    // Function to set a key-value pair in the hash table
    function set(key, value) {
      const index = hash(key, size);
      if (!keyMap.has(index)) {
        keyMap.set(index, []);
      }
      keyMap.get(index).push([key, value]);
    }
  
    // Function to get a value based on a key
    function get(key) {
      const index = hash(key, size);
      const bucket = keyMap.get(index);
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            return bucket[i][1];
          }
        }
      }
      return undefined;
    }
  
    // Function to get all keys in the hash table
    function keys() {
      let keysArray = [];
      for (let [index, bucket] of keyMap.entries()) {
        if (bucket) {
          for (let i = 0; i < bucket.length; i++) {
            keysArray.push(bucket[i][0]);
          }
        }
      }
      return keysArray;
    }
  
    return { set, get, keys };
  }
  
  // Example usage
  const hashTable = createHashTable();

  hashTable.set("Hello", "world");
  hashTable.set("apple", "orange");
  

  return (
    <div>
      <h3>Hashing Search Algorithm</h3>
      <div>
        Input: Hask Text
      </div>
      {/* <div>Finding output index: {index}</div> */}
    </div>
  );
}