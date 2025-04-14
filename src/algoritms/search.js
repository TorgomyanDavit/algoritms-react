/*1 Linear search: 
    Linear search is a simple searching algorithm that sequentially checks each element in a list until a match is found or the entire list has been searched.
*/

import { useEffect, useState } from "react";
import { TipAnimatedImage } from "./animatedImg";
import { convertFunctionTemplateLiteral } from "./mixedAlgoritm";
  

export function LineirSearch() {
  const [arr, setArr] = useState([5, 3, 8, 2, 9]);
  const [target, setTarget] = useState(8);

  function handleArrayChange(e) {
    setArr(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
  }

  function handleTargetChange(e) {
    setTarget(parseInt(e.target.value.trim(), 10) || 0);
  }

  function calculate() {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === target) {
        return index; // Return the index of the target if found
      }
    }
    return -1; // Not found
  }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔍 Linear Search Algorithm</h3>
        <div className="input-side">
          <label className="label">
            Enter Numbers:
            <input
              className="input"
              type="text"
              value={arr.join(",")}
              onChange={handleArrayChange}
              placeholder="e.g. 5, 3, 8, 2, 9"
            />
          </label>
          <label className="label">
            Enter Target:
            <input
              className="input"
              type="number"
              value={target}
              onChange={handleTargetChange}
              placeholder="e.g. 8"
            />
          </label>
        </div>

        <p>
          <strong>Result:</strong>{" "}
          <span className="output success">
            Found at index: {calculate()}
          </span>
        </p>

        <p className="description">
          <TipAnimatedImage />
          Linear Search is the simplest searching algorithm that checks each element 
          in the array one by one until the target value is found or the end is reached.
          Its time complexity is O(n), which makes it inefficient for large datasets.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  );
}

export function BinarySearch() {
  const [arr, setArr] = useState([1, 3, 5, 7, 9, 11]);
  const [target, setTarget] = useState(7);

  function handleArrayChange(e) {
    const sortedArr = e.target.value
      .split(",")
      .map((num) => parseInt(num.trim(), 10) || 0)
      .sort((a, b) => a - b);
    setArr(sortedArr);
  }

  function handleTargetChange(e) {
    setTarget(parseInt(e.target.value.trim(), 10) || 0);
  }

  function calculate() {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1; 
  }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔎 Binary Search Algorithm</h3>
        <div className="input-side">
          <label className="label">
            Enter Sorted Numbers:
            <input
              className="input"
              type="text"
              value={arr.join(",")}
              onChange={handleArrayChange}
              placeholder="e.g. 1, 3, 5, 7, 9"
            />
          </label>
          <label className="label">
            Enter Target:
            <input
              className="input"
              type="number"
              value={target}
              onChange={handleTargetChange}
              placeholder="e.g. 7"
            />
          </label>
        </div>

        <p>
          <strong>Result:</strong>{" "}
          <span className="output success">
            Found at index: {calculate()}
          </span>
        </p>

        <p className="description">
          <TipAnimatedImage />
          Binary Search is a fast search algorithm with a time complexity of O(log n). It only works on sorted arrays by repeatedly dividing the search interval in half. If the value of the target is less than the element in the middle, it continues in the left half; otherwise, it continues in the right half.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
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