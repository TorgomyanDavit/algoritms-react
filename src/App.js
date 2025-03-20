import React, { useEffect, useState } from 'react';
import "./App.css"
import MyComponent from 'getlogic';


import ThreeExample from './three';
import { BubbleSort, GenerateMergeSort, GenerateQuickSort, InsertionSort, SelectionSort } from './algoritms/sorting';
import { HashingSearch, BinarySearch, LineirSearch, TernarySearch, HashingTextSearch, DFSArrayExample, RecursiveBinarySearch } from './algoritms/search';
import { CopyObjectMethods, CuriousJsonStringify, DebounceWindowResize, DeepCopyObject, Fibonacci, Find_max, FirstNoneRepeatingCharacters, GenerateFibonacci, GenerateFibonacci2, GetAllDigitsSum, GetSomeID, IsPalindrome, MaxSumAdjacent, MemoizeObject, MemoizedFibonacci, RemoveDuplicates, SumDifferentArrayValuePairExist, ThrottleWindowScroll } from './algoritms/mixedAlgoritm';
import ZoomedImage from './component';
import MasonryGrid from './component/reactWindow/reactWindow';
import List from './component/reactWindow/reactWindow';
import ImageUpload from './AI/imageRecognization';


function App() {  
  const [mergeSortedList,setMergeSortedList] = useState([])
  
  return (  
    <div className="App">
      {/* <MemoizeObject/> */}

      {/* <ThrottleWindowScroll/> */}
      {/* <DebounceWindowResize/> */}
      {/* <List/> */}

      {/* mixed algoritm */}

      {/* createPubSub()  */}
      {/* <DeepCopyObject/> */}
      {/* <MyComponent name="Jone"/> */}
      {/* <CuriousJsonStringify/> */}

      {/* <GenerateFibonacci count={100}/> */}
      {/* <MemoizedFibonacci count={100}/> */}
      {/* <Fibonacci count={50}/> */}
      {/* <GenerateFibonacci2 count={50}/> */}

      {/* <Find_max nums={[5, 3, 1, 4, 2]}/> */}
      {/* <GetAllDigitsSum arr={[53,14,2]}/> */}
      {/* <MaxSumAdjacent arr={[-6, 20, 8, -2, 4]}/> */}
      {/* <RemoveDuplicates/> */}
      {/* <GetSomeID/> */}
      {/* <CopyObjectMethods/> */}
      {/* <IsPalindrome inputText={"abba"}/> */}

      {/* sort algoritm */}
      {/* <BubbleSort arr={[-6, 20, 8, -2, 4]}/> */}
      {/* <SelectionSort arr={[-6, 20, 8, -2, 4]}/> */}
      {/* <InsertionSort arr={[-6, 20, 8, -2, 4]}/> */}
      {/* <GenerateQuickSort arr={[-6, 20, 8, -2, 4]}/> */}
      {/* <GenerateMergeSort arr={[-6, 20, 8, -2, 4]} callBack={setMergeSortedList}/> */}

      {/* searching algoritm */}
      {/* <LineirSearch arr={[5, 3, 1, 4, 2]} target={2}/>
      <BinarySearch arr={[1, 2, 4, 5]} target={4}/>
      <RecursiveBinarySearch arr={[1, 2, 3, 4, 5]}/>
      <HashingSearch arr={[1, 2, 3, 4, 5]} target={3}/>
      <TernarySearch arr={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} target={8}/>
      <DFSArrayExample nestedArray={[1, [2, [3, 4], 5], 6, [7, 8]]}/>
      <HashingTextSearch /> */}

      {/* Three js */}
      {/* <ThreeExample/> */}

      {/* Another Challenges */}
      {/* <ZoomedImage/> */}

      {/* <ImageUpload/> */}

      {/*international interview quetion */}
      <SumDifferentArrayValuePairExist input1={[4,2,5,60,10,9,15]} input2={[67,12,50,2,1,0]} target={22}/>
      <FirstNoneRepeatingCharacters targetText={"abcabbiefc"}/>


        
    </div>
  )
}
export default App;

/**SON (JavaScript Object Notation) does not have explicit data types in the way that some programming languages do. 
* Instead, JSON represents data as a collection of key-value pairs, and the values can have various types. The basic data types in JSON include:
Strings: Represented as text enclosed in double quotes. For example: "Hello, World!"
Numbers: Can be integers or floating-point numbers. For example: 42 or 3.14
Booleans: Represented as true or false.
Null: Represents an empty value and is simply written as null.
Arrays: Ordered lists of values enclosed in square brackets. Arrays can contain values of different types, 
including other arrays. For example: [1, 2, "apple", true, null]
Objects: Unordered collections of key-value pairs, where keys are strings and values can be of any JSON data type. 
Objects are enclosed in curly braces. For example: */


