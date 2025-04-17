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
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
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

export function TernarySearch() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [target, setTarget] = useState(4);

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
      const mid1 = start + Math.floor((end - start) / 3);
      const mid2 = end - Math.floor((end - start) / 3);

      if (arr[mid1] === target) return mid1;
      if (arr[mid2] === target) return mid2;

      if (target < arr[mid1]) {
        end = mid1 - 1;
      } else if (target > arr[mid2]) {
        start = mid2 + 1;
      } else {
        start = mid1 + 1;
        end = mid2 - 1;
      }
    }

    return -1;
  }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔍 Ternary Search Algorithm</h3>
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
          Ternary Search is a divide-and-conquer algorithm that splits the array
          into three parts. It works on **sorted arrays** and has a time complexity
          of **O(log₃ n)**. It compares the target to two midpoints to narrow the
          search interval more quickly than binary search.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  );
}

export function HashingSearch() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const [target, setTarget] = useState(4);

  function handleArrayChange(e) {
    const parsedArr = e.target.value
      .split(",")
      .map((num) => parseInt(num.trim(), 10) || 0);
    setArr(parsedArr);
  }

  function handleTargetChange(e) {
    setTarget(parseInt(e.target.value.trim(), 10) || 0);
  }

  function calculate() {
    const hashTable = {};
    arr.forEach((value, index) => {
      hashTable[value] = index;
    });
    return hashTable[target] !== undefined ? hashTable[target] : -1;
  }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔎 Hashing Search Algorithm</h3>
        <div className="input-side">
          <label className="label">
            Enter Numbers:
            <input
              className="input"
              type="text"
              value={arr.join(",")}
              onChange={handleArrayChange}
              placeholder="e.g. 1, 2, 3, 4"
            />
          </label>
          <label className="label">
            Enter Target:
            <input
              className="input"
              type="number"
              value={target}
              onChange={handleTargetChange}
              placeholder="e.g. 4"
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
          Hashing Search uses a hash table to store elements and their indices
          for **constant-time (O(1))** lookup. It's extremely efficient for
          unsorted data when quick access is needed.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  );
}

export function DFSArrayExample() {
  const [input, setInput] = useState("[1, [2, 3], [4, [5, 6]]]");
  const [nestedArray, setNestedArray] = useState([1, [2, 3], [4, [5, 6]]]);
  const [result, setResult] = useState([]);

  function handleInputChange(e) {
    const userInput = e.target.value;
    setInput(userInput);
    try {
      const parsed = JSON.parse(userInput);
      if (Array.isArray(parsed)) {
        setNestedArray(parsed);
      } else {
        throw new Error();
      }
    } catch {
      setNestedArray([]);
    }
  }

  function depthFirstSearchArray(array, callback) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        depthFirstSearchArray(item, callback);
      } else {
        callback(item);
      }
    });
  }

  function extractArrayCallBack() {
    const visited = [];
    depthFirstSearchArray(nestedArray, (item) => visited.push(item));
    setResult(visited);
  }

  useEffect(extractArrayCallBack, [nestedArray]);

  return (
    <div className="container">
      <div className="result-side">
        <h3>🧭 DFS on Nested Array</h3>

        <div className="input-side">
          <label className="label">
            Enter Nested Array (as JSON):
            <input
              className="input"
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder='e.g. [1, [2, 3], [4, [5, 6]]]'
            />
          </label>
        </div>

        <p>
          <strong>Result:</strong>{" "}
          <span className="output success">
            {result.length > 0 ? result.join(" ⇒ ") : "No valid input"}
          </span>
        </p>

        <p className="description">
          <TipAnimatedImage />
          This demonstrates a **Depth-First Search (DFS)** traversal over a **nested array**.
          It explores each branch completely before moving to the next. DFS is commonly
          used in tree/graph traversal and recursive data structures.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(depthFirstSearchArray)}</code>
        <br/>
        <br/>
        <code>{convertFunctionTemplateLiteral(extractArrayCallBack)}</code>
      </pre>
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

export function HashingTextSearch() {
  const [entries, setEntries] = useState("Hello:world, apple:orange");
  const [searchKey, setSearchKey] = useState("apple");

  function hash(key, arrayLength) {
    let total = 0;
    for (let char of key) {
      let value = char.charCodeAt(0);
      total = (total + value) % arrayLength;
    }
    return total;
  }

  function createHashTable(size = 53) {
    const keyMap = new Map();

    function set(key, value) {
      const index = hash(key, size);
      if (!keyMap.has(index)) {
        keyMap.set(index, []);
      }
      keyMap.get(index).push([key, value]);
    }

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
      return "Not found";
    }

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

  function calculate() {
    const hashTable = createHashTable();
    const pairs = entries.split(",").map((pair) => pair.trim().split(":"));
    for (const [key, value] of pairs) {
      hashTable.set(key, value);
    }
    return hashTable.get(searchKey);
  }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔎 Hashing Text Search</h3>
        <div className="input-side">
          <label className="label">
            Enter Key-Value Pairs:
            <input
              className="input"
              type="text"
              value={entries}
              onChange={(e) => setEntries(e.target.value)}
              placeholder="e.g. Hello:world, apple:orange"
            />
          </label>
          <label className="label">
            Enter Search Key:
            <input
              className="input"
              type="text"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="e.g. apple"
            />
          </label>
        </div>

        <p>
          <strong>Result:</strong>{" "}
          <span className="output success">{calculate()}</span>
        </p>

        <p className="description">
          <TipAnimatedImage />
          This uses a basic hash table implementation with string keys and shows
          how collisions are resolved using chaining.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  );
}
