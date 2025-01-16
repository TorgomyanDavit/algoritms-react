/**Sorting Algoritm */
// Bubble Sort + 
// Selection Sort + 
// quickSort +  
// Insertion Sort: +
// Merge Sort +

import { useEffect } from "react";

/**Bubble Sort 
 * is a simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements, and swaps them if they are in the wrong order. 
 * It continues to do this until no more swaps are needed, indicating that the list is sorted. 
 * Bubble Sort has a time complexity of O(n^2) in the worst case and is not very efficient for large lists.
*/
export function BubbleSort({arr}) {
    let input = arr.slice() // copy element 
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {  
        let currentElement = arr[i];
        let nextElement = arr[i + 1];
        if (currentElement > nextElement) {
          // Swap the elements
          arr[i] = nextElement;
          arr[i + 1] = currentElement;
          swapped = true;
        }
      }
    } while (swapped);
  
  
    return (
      <div>
        <h3>BubbleSort</h3> 
        <div>input = {input}</div>
        <div>output = {arr.join(",")}</div>
      </div>
    )
}
  
/**Selection Sort 
    is a straightforward sorting algorithm that repeatedly
    finds the minimum element from the unsorted part of the array and places it at the beginning.
    It divides the array into a sorted and an unsorted region, gradually expanding the sorted portion.
    Selection Sort has a time complexity of O(n^2) in the worst case and is not the most efficient choice for large datasets.
*/
export function SelectionSort({arr}) {
    let input = [...arr]

    function selectionSort(arr) {
        const length = arr.length;
        for (let i = 0; i < length - 1; i++) {
            let minIndex = i;

            // Find the index of the minimum element in the remaining unsorted array
            for (let j = i + 1; j < length; j++) {
                const nextElement = arr[j]
                const currentElement = arr[minIndex]
                debugger

                if (nextElement < currentElement) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element in the unsorted part
            if (minIndex !== i) {
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        
        }

        return arr;
    }

    const result = selectionSort(arr)
    return (
        <div>
        <h3>GenerateSelectionSort</h3> 
        <div>input = {input}</div>
        <div>output = {result.join(",")}</div>
        </div>
    )
}
  
/**Insertion Sort is a simple sorting algorithm that builds 
    the final sorted array one item at a time. It repeatedly takes an element 
    and inserts it into the correct position within the sorted portion of the array. 
    It works well for small lists but has a time complexity of O(n^2) in the worst case, 
    making it less efficient for large datasets.
*/
export function InsertionSort({arr}) { // [5, 3, 1, 4, 2]
    const originArray = arr;
    const length = arr.length;


    for (let i = 1; i < length; i++) {
        const nextElemy = arr[i];
        let prevelemIndex = i - 1;

        while (prevelemIndex >= 0 && arr[prevelemIndex] > nextElemy) {
            arr[prevelemIndex + 1] = arr[prevelemIndex];
            prevelemIndex--;
        }

        arr[prevelemIndex + 1] = nextElemy;
    }

    return (
        <div>
        <h3>Generate Insertion</h3> 
        <div>input = {originArray}</div>
        <div>output = {arr.join(",")}</div>
        </div>
    )
}
  
/**QuickSort 
    is a popular and efficient sorting algorithm that follows the divide-and-conquer strategy:
    Divide: Choose a "pivot" element and partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
    Conquer: Recursively apply QuickSort to the sub-arrays.
    Combine: No additional work is needed to combine as the sub-arrays are sorted in place.
    QuickSort has an average time complexity of O(n log n) and is widely used for its speed and simplicity.
*/
export function GenerateQuickSort({arr}) {

    function quickSort(arr) { //[5, 3, 1, 4, 2]
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
        <div>
            <h3>GenerateQuickSort</h3> 
            <div>input = {arr}</div>
            <div>output = {quickSort(arr).join(",")}</div>
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
    const originArray = arr; // [5, 3, 1, 4, 2]

    function mergeSort(arr) {
        if( arr.length <= 1 ) {
            return arr
        }

        const middle = Math.floor(arr.length / 2)
        const left = arr.slice(0,middle)
        const right = arr.slice(middle)
        return merge(mergeSort(left),mergeSort(right))
    }

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

    useEffect(() => { callBack(mergeSort(arr)) },[])
    
    return (
        <div>
            <h3>Merge Sort Algoritm</h3> 
            <div>input = {originArray}</div>
            <div>output = {mergeSort(arr).join(",")}</div>
        </div>
    )
}