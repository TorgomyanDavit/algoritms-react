/**Sorting Algoritm */
// Bubble Sort + 
// Selection Sort + 
// quickSort +  
// Insertion Sort: +
// Merge Sort +

import { useEffect, useState } from "react";
import { convertFunctionTemplateLiteral } from "./mixedAlgoritm";
import { TipAnimatedImage } from "./animatedImg";
// import "../App.css"

/**Bubble Sort 
 * is a simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements, and swaps them if they are in the wrong order. 
 * It continues to do this until no more swaps are needed, indicating that the list is sorted. 
 * Bubble Sort has a time complexity of O(n^2) in the worst case and is not very efficient for large lists.
*/
export function BubbleSort() {
    const [arr, setArr] = useState([-6, 20, 8, -2, 4]);
    
    function handleChange(e) {
      setArr(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
    }
  
    function calculate() {
      let input = [...arr]; 
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < input.length - 1; i++) {  
            let currentElement = arr[i];
            let nextElement = arr[i + 1];
            if (currentElement > nextElement) {
              arr[i] = nextElement;
              arr[i + 1] = currentElement;
              swapped = true;
            }
        }
      } while (swapped);
      return input;
    }
  
    return (
      <div className="container">
        <div className="result-side">
            <h3>🔢 Bubble Sort</h3>
            <div className="input-side">
                <label className="label">
                    Enter Numbers:
                    <input
                    className="input"
                    type="text"
                    value={arr.join(",")}
                    onChange={handleChange}
                    placeholder="Enter numbers, e.g. -6,20,8,-2,4"
                    />
                </label>
            </div>
            <p><strong>Result:</strong> <span className="output success">Found: {calculate().join(",")}</span></p>
            <p className="description">
                <TipAnimatedImage />
                Bubble Sort 
                is a simple sorting algorithm that repeatedly steps through the list, 
                compares adjacent elements, and swaps them if they are in the wrong order. 
                It continues to do this until no more swaps are needed, indicating that the list is sorted. 
                Bubble Sort has a time complexity of O(n^2) in the worst case and is not very efficient for large lists.
            </p>
        </div>

        <pre className="code-box">
            <code>{convertFunctionTemplateLiteral(calculate)}</code>
        </pre>
      </div>
    );
}
  
/**Selection Sort 
    is a straightforward sorting algorithm that repeatedly
    finds the minimum element from the unsorted part of the array and places it at the beginning.
    It divides the array into a sorted and an unsorted region, gradually expanding the sorted portion.
    Selection Sort has a time complexity of O(n^2) in the worst case and is not the most efficient choice for large datasets.
*/
export function SelectionSort() {
    const [arr, setArr] = useState([64, 25, 12, 22, 11]);
  
    function handleChange(e) {
      setArr(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
    }
  
    function selectionSort(inputArr) {
      let arr = [...inputArr]; 
      const length = arr.length;
  
        for (let i = 0; i < length - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < length; j++) {
                const nextElement = arr[j]
                const currentElement = arr[minIndex]

                if (nextElement < currentElement) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
    
        }
  
      return arr;
    }
  
    return (
      <div className="container">
        <div className="result-side">
          <h3>🔢 Selection Sort</h3>
          <div className="input-side">
            <label className="label">
              Enter Numbers:
              <input
                className="input"
                type="text"
                value={arr.join(",")}
                onChange={handleChange}
                placeholder="Enter numbers, e.g. 64,25,12,22,11"
              />
            </label>
          </div>
          <p>
            <strong>Result:</strong>{" "}
            <span className="output success">Sorted: {selectionSort(arr).join(",")}</span>
            <p className="description">
              <TipAnimatedImage />
                Selection Sort 
                is a straightforward sorting algorithm that repeatedly
                finds the minimum element from the unsorted part of the array and places it at the beginning.
                It divides the array into a sorted and an unsorted region, gradually expanding the sorted portion.
                Selection Sort has a time complexity of O(n^2) in the worst case and is not the most efficient choice for large datasets.
            </p>

          </p>
        </div>
  
        <pre className="code-box">
          <code>{convertFunctionTemplateLiteral(selectionSort)}</code>
        </pre>
      </div>
    );
}
  
/**Insertion Sort is a simple sorting algorithm that builds 
    the final sorted array one item at a time. It repeatedly takes an element 
    and inserts it into the correct position within the sorted portion of the array. 
    It works well for small lists but has a time complexity of O(n^2) in the worst case, 
    making it less efficient for large datasets.
*/
export function InsertionSort() {
    const [arr, setArr] = useState([5, 3, 1, 4, 2]);
    const length = arr.length;
  
    function handleChange(e) {
      setArr(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
    }
  
    function insertionSort(arr) {
      for (let i = 1; i < length; i++) {
        const nextElement = arr[i];
        let prevElementIndex = i - 1;
        while (prevElementIndex >= 0 && arr[prevElementIndex] > nextElement) {
          arr[prevElementIndex + 1] = arr[prevElementIndex];
          prevElementIndex--;
        }
  
        arr[prevElementIndex + 1] = nextElement;
      }
      return arr;
    }
  
    const sortedArray = insertionSort([...arr]);
  
    return (
      <div className="container">
        <div className="result-side">
            <h3>🔢 Insertion Sort</h3>
            <div className="input-side">
                <label className="input">
                Enter Numbers:
                <input
                    className="input"
                    type="text"
                    value={arr.join(",")}
                    onChange={handleChange}
                    placeholder="Enter numbers, e.g. 5, 3, 1, 4, 2"
                />
                </label>
            </div>
            <p>
                <strong>Result:</strong>{" "}
                <span className="output success">Sorted: {sortedArray.join(",")}</span>
            </p>
            <p className="description">
                <TipAnimatedImage />
                Insertion Sort is a simple sorting algorithm that builds 
                the final sorted array one item at a time. It repeatedly takes an element 
                and inserts it into the correct position within the sorted portion of the array. 
                It works well for small lists but has a time complexity of O(n^2) in the worst case, 
                making it less efficient for large datasets.
            </p>
        </div>
  
        <pre className="code-box">
          <code>{convertFunctionTemplateLiteral(insertionSort)}</code>
        </pre>
      </div>
    );
}
  
/**QuickSort 
    is a popular and efficient sorting algorithm that follows the divide-and-conquer strategy:
    Divide: Choose a "pivot" element and partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
    Conquer: Recursively apply QuickSort to the sub-arrays.
    Combine: No additional work is needed to combine as the sub-arrays are sorted in place.
    QuickSort has an average time complexity of O(n log n) and is widely used for its speed and simplicity.
*/
export function GenerateQuickSort() {

    const [arr, setArr] = useState([5, 3, 1, 4, 2]);
      
    function handleChange(e) {
      setArr(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
    }

    function quickSort(arr) { 
      if (arr.length <= 1) {
        return arr;
      }

      const pivot = arr[0];
      const less = [];
      const equal = [];
      const greater = [];
      
      for (const element of arr) {
        if (element < pivot) {
          less.push(element);
        } else if (element === pivot) {
          equal.push(element);
        } else {
          greater.push(element);
        }
      }
      
      const sortedLess = quickSort(less);
      const sortedGreater = quickSort(greater);
      
      const sortedData = sortedLess.concat(equal,sortedGreater);
      return sortedData
    }

    return (
      <div className="container">
        <div className="result-side">
          <h3>⚡ QuickSort Algorithm</h3>
          <div className="input-side">
              <label className="input">
                  Enter Numbers:
                  <input
                      className="input"
                      type="text"
                      value={arr.join(",")}
                      onChange={handleChange}
                      placeholder="Enter numbers, e.g. 5, 3, 1, 4, 2"
                  />
              </label>
          </div>
          <p>
            <strong>Result:</strong>{" "}
            <span className="output success">Sorted: {quickSort(arr).join(",")}</span>
          </p>
          <p className="description">
            <TipAnimatedImage />
            QuickSort is a **divide-and-conquer** algorithm that selects a pivot,
            partitions the array into elements less than and greater than the pivot,
            and recursively sorts each part. It has an average time complexity of **O(n log n)**,
            making it efficient for large datasets.
          </p>
        </div>
        <pre className="code-box">
          <code>{convertFunctionTemplateLiteral(quickSort)}</code>
        </pre>
      </div>
    )
}
  
/*Merge Sort: 
    Merge Sort is a popular sorting algorithm that follows the divide-and-conquer approach:
    Divide: The array is repeatedly divided into two halves until each part contains one or zero elements.
    Conquer: The one-element or empty subarrays are inherently sorted. Pairs of adjacent subarrays are then merged into larger sorted subarrays.
    Merge: The merging process combines two sorted subarrays into one sorted subarray by comparing and rearranging elements.
    Repeat: Steps 2 and 3 are performed recursively until the entire array is sorted.
    Merge Sort is efficient, stable, and guarantees a time complexity of O(n log n) for sorting an array of n elements.
*/
  
export function GenerateMergeSort({arr,callBack}) {
    const originArray = arr; // [-6, 20, 8, -2, 4]

    function merge(leftArr, rightArr) {
        const sortedArray = []

        while(leftArr.length && rightArr.length) {
            if(leftArr[0] < rightArr[0]) {
                sortedArray.push(leftArr.shift())
            } else {
                sortedArray.push(rightArr.shift())
            }
        }

        return sortedArray.concat(leftArr,rightArr)
    }

    function mergeSort(arr) {
        if( arr.length <= 1 ) {
            return arr
        }

        const middle = Math.floor(arr.length / 2)
        const left = arr.slice(0,middle)
        const right = arr.slice(middle)

        return merge(mergeSort(left),mergeSort(right))
    }

    useEffect(() => { callBack(mergeSort(arr)) },[])
    
    return (
        <div>
            <h3>Merge Sort Algoritm</h3> 
            <div>input = {originArray}</div>
            <div>output = {mergeSort(arr).join(",")}</div>
        </div>
    )
}