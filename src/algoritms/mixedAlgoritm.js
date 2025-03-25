import x from "../data/getSomeIdData.json"
import React, { useEffect, useState, useCallback } from 'react';
import _ from "lodash";


export function convertFunctionTemplateLiteral(func) {
  const functionSource = func.toString(); // Get the raw function code
  // const bodyStart = functionSource.indexOf("{") + 1; // Find the start of the function body
  // const bodyEnd = functionSource.lastIndexOf("}"); // Find the end of the function body
  // const bodyCode = functionSource.slice(bodyStart, bodyEnd).trim(); // Extract the body

  return functionSource;
}

export function convertArrayToTemplateLiteral(arr) {
  const customString = arr.map((element) => {
    if (element === null) {
      return "null";
    } else if (element === undefined) {
      return "undefined";
    } else if (typeof element === "function") {
      return "() => \"\"";
    } else {
      return element.toString();
    }
  }).join(", ");

  return `[${customString}]`;
}

export function CuriousJsonStringify() {
    const inputArray = [1,null,undefined,() => "",NaN]
    const inputObject = {age:25,name:NaN,func:() => "",country:null,city:undefined}
  
    const innerTemplateLiteralArr = convertArrayToTemplateLiteral(inputArray);
  
    function convertObjectToTemplateLiteral(obj) {
      const innerTemplate = Object.entries(obj).map(([key, value]) => {
        if (value === null) {
          return `${key}: null`;
        } else if (value === undefined) {
          return `${key}: undefined`;
        } else if (typeof value === 'function') {
          return `${key}: ${value.toString()}`;
        } else if (Number.isNaN(value)) {
          return `${key}: NaN`;
        } else {
          return `${key}: ${value}`;
        }
      }).join(', ');
      return `{${innerTemplate}}`;
    }
    const innerTemplateLiteral = convertObjectToTemplateLiteral(inputObject);
  
    return (
      <div>
        <h3>ArrayAs JSON.stringify</h3> 
        <div>input inputArray = {innerTemplateLiteralArr}</div>
        <div>output = {JSON.stringify(inputArray)}</div>
        <br/>
        <h3>ObjectAs JSON.stringify</h3> 
        <div>input ArrayInputExample = {innerTemplateLiteral}</div>
        <div>output = {JSON.stringify(inputObject)}</div>
      </div>
    )
}

function fibonacciTailRecursive(n, a = 0, b = 1, sequence = []) {
  if (n <= 0) {
    return sequence;
  }

  sequence.push(a);
  // Tail recursive call with updated values
  return fibonacciTailRecursive(n - 1, b, a + b, sequence);
}

export function GenerateFibonacci2({ count }) {
  // Generate Fibonacci sequence using tail recursion

  const fibonacciSequence = fibonacciTailRecursive(count);
  
  return (
    <div>
      <h3>Fibonacci Sequence</h3>
      <div>Input = {count}</div>
      <div>Output = {fibonacciSequence.join(", ")}</div>
    </div>
  );
}

export function GenerateFibonacci({count}) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < count; i++) {
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return (
    <div>
    <h3>fibonacciSequence</h3> 
    <div>input = {count}</div>
    <div>output = {fibonacciSequence.join(",")}</div>
    </div>
  )
}

export function Fibonacci({count}) {

  function fibonacci(n) {
    if(n < 2)return n;

    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const x = fibonacci(count)
  alert(x)
  return (
    <div>
    <h3>fibonacciSequence</h3> 
    <div>input = {count}</div>
    {/* <div>output = {fibonacci(count)}</div> */}
    </div>
  )
}

export function MemoizedFibonacci({count}) {


  const memoFibonacci = memoize((n) => {
    if(n < 2)return n;

    return memoFibonacci(n - 1) + memoFibonacci(n - 2)
  })


  function memoize(func) {
    const cache = new Map()

    return function(n) {
      if(cache[n] === undefined) {
        cache[n] = func(n)
      }
      return cache[n]
    }
  }


  return (
    <div>
    <h3>fibonacciSequence</h3> 
    <div>input = {count}</div>
    <div>output = {memoFibonacci(count)}</div>
    </div>
  )
}

export function Find_max({nums}) {
let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
for (let num of nums) {
    if (num > max_num) {
    max_num = num
    }
}



return (
    <div>
    <h3>Find Max</h3> 
    <div>input = {nums}</div>
    <div>output = {max_num}</div>
    </div>
)
}

export function GetAllDigitsSum({arr}) {
const SumNumber = arr.reduce((aggr,val) => {
    return aggr + val
},0)

const SumDigitsNumber = arr.join("").trim().split("").reduce((aggr,val) => {
    return aggr + +val
},0)

const result = SumNumber + SumDigitsNumber

return (
    <div>
    <h3>Get All Digits and Number Sum</h3> 
    <div>input {arr}</div>
    <div>output Number and digits sum {result}</div>
    <div>Number sum  {SumNumber}</div>
    <div>digits {SumDigitsNumber}</div>
    </div>
)  
} 

export function MaxSumAdjacent({arr}) {
    if (arr.length < 2) {
        return null; // We need at least two elements to calculate a product.
    }

    let maxProduct = arr[0] * arr[1]; // Initialize maxProduct with the product of the first two elements.

    for (let i = 1; i < arr.length - 1; i++) {
      const currentProduct = arr[i] * arr[i + 1];
      maxProduct = Math.max(maxProduct, currentProduct);
    }


    return (
        <div>
          <h3>Get All Digits and Number Sum</h3> 
          <div>input {arr}</div>
          <div>output {maxProduct}</div>
        </div>
    )  
} 

export function GetSomeID() {
  const newArray = x.reduce((aggr, val, index) => {
    if (val.isDeleted) {
      aggr.push({ itemPosition: index, item: val });
    }
    return aggr;
  }, []);
  
  let ischange = 0;
  newArray.forEach((filteredItem) => {
    x.forEach((val, ind) => {
      if (!val.isDeleted && val.id === filteredItem.item.replacedId) {
        const objectToUpdate = x.find((v, i) => i === ind);
        const myArr = x.filter((item, i) => i !== ind);
        myArr.splice(filteredItem.itemPosition - ischange, 0, objectToUpdate);
        x = myArr;
        if(ischange === 0) {
          ischange = 1
        }
        return;
      }
    });
  });


  return (
    <div>
        <h3>GetSomeID Array</h3> 
        <div>output {JSON.stringify(x)}</div>
    </div>
  )  
}

export function RemoveDuplicates() {
  const arr = [1,1,1,2,2,3,3]
  let repeatArray = {1:1}
  for(let i = 0; i < arr.length - 1; i++) {
    if(repeatArray[arr[i]] === undefined) {
      repeatArray[arr[i]] = arr[i]
    }
  }

  return (
      <div>
          <h3>RemoveDuplicates from Array</h3> 
          <div>input {arr}</div>
          <div>output {Object.keys(repeatArray).join(", ")}</div>
      </div>
  )  
}

export function DeepCopyObject() {
  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; 
    }
  
    const copy = Array.isArray(obj) ? [] : {}; // Determine if obj is an array or object
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }

  const obj1 = { 
    age: 1,
    nestedObj:{
       name:"joe",
       net:{
        name:"vlan"
       }
    },
    arr:[15]
  };


  return (
      <div>
          <h3>Deep Copy Object</h3> 
          <div>output {deepCopy(obj1).join(", ")}</div>
      </div>
  )  
}

export function CopyObjectMethods() {

  // assign methisd is shallow copy
  const obj = { a: 1, b: { c: 2 } };
  const shallowCopyAssign = Object.assign({}, obj);
  shallowCopyAssign.b.c = 42; 

  //spread library is shallow copy
  const obj4 = { a: 1, b: { c: 2 } };
  const spreadCopy = {...obj4};
  spreadCopy.b.c = 42; 

  // structuredClone is deep copy
  const obj2 = { a: 1, b: { c: 2 } };
  const structuredClonCopy = structuredClone(obj2);
  structuredClonCopy.b.c = 42;

  //lodish library _.cloneDeep(obj) is deep copy
  const obj3 = { a: 1, b: { c: 2 } };
  const lodishCopy = _.cloneDeep(obj3);
  lodishCopy.b.c = 42; 

  const obj5 = { a: 1, b: { c: 2, d: () => '' } };
  const stringifyCopy = JSON.parse(JSON.stringify(obj));
  stringifyCopy.b.c = 42;



  return (
    <div>
      <h3>Shallow and Deep Copy methods</h3> 

      <h3>Object.assign is shallow copy  shallowCopyAssign.b.c = 42;</h3> 
      <div>original array changed {JSON.stringify(obj)}</div>
      <div>shallowCopyAssign {JSON.stringify(shallowCopyAssign)}</div>
      <br/>

      <h3>spread is shallow copy  spreadCopy.b.c = 42;</h3> 
      <div>original array changed {JSON.stringify(obj4)}</div>
      <div>spreadCopy {JSON.stringify(spreadCopy)}</div>
      <br/>

      <h3>structuredClone(obj) is deep copy  structuredClonCopy.b.c = 42;</h3> 
      <div>original array not changed {JSON.stringify(obj2)}</div>
      <div>structuredClonCopy {JSON.stringify(structuredClonCopy)}</div>
      <br/>

      <h3>lodish is deep copy  lodishCopy.b.c = 42;</h3> 
      <div>original array not changed {JSON.stringify(obj3)}</div>
      <div>lodishCopy {JSON.stringify(lodishCopy)}</div>
      <br/>

      <h3>JSON.stringify is deep copy stringifyCopy.b.c = 42; but when using undefined,null, referenced value, or function it not work properly</h3> 
      <div>original array {`{ a: 1, b: { c: 2, d: () => '' } }`}</div>
      <div>original array not changed but upset function{JSON.stringify(obj5)}</div>
      <div>stringifyCopy {JSON.stringify(stringifyCopy)}</div>




    </div>
  )  
}

export function DebounceWindowResize() {
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const handleResize = useCallback(() => {
    console.log('Window resized');
  }, []);

  const debouncedHandleResize = debounce(handleResize, 200);
  
  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return (
    <div>
      <h3>Debounce Window Resize</h3>
      <div>Resize the window and check the console log.</div>
    </div>
  );
}

export function ThrottleWindowScroll() {

  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);

        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('Window scrolled');
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h3>Throttle Window Scroll</h3>
      <div>Scroll the window and check the console log.</div>
      <div className="scrollItem">
        {
          Array.from({ length: 1000 }, (_, index) => (
            <div>item {index}</div>
          ))
        }
      </div>
    </div>
  );
}

export function MemoizeObject() {
  
  function memoize(func) {

    const cache = new Map();
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }

      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
    };
  }

  const factorial = memoize((n) => {
    console.log('Computing factorial…');
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  });

  function callCash() {
    const start = performance.now();
    const result = factorial(5); 
    const end = performance.now();
    const timeTaken = end - start;
    console.log('Result:', result);
    console.log('Time taken:', timeTaken.toFixed(2), 'ms');
  }

  return (
    <div>
      <h3>Memoize Simple Example</h3>
      <button onClick={callCash}>Click to Cash</button>
    </div>
  );
}

//  this is not component
export function createPubSub() {
  const subscribers = {};

  function subscribe(event, callback) {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    subscribers[event].push(callback);
    return () => unsubscribe(event, callback);
  }

  function unsubscribe(event, callback) {
    if (!subscribers[event]) return;
    subscribers[event] = subscribers[event].filter(cb => cb !== callback);
  }

  function publish(event, data) {
    if (!subscribers[event]) return;
    subscribers[event].forEach(callback => callback(data));
  }

  return {
    subscribe,
    unsubscribe,
    publish
  };
}

export function IsPalindrome({inputText}) {
  let str = inputText
  let isPalindrom = false
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;
  
  while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        isPalindrom = false;
        break
      } else {
        isPalindrom = true;
      }
      left++;
      right--;
  }


  return <div>
    <h3>IsPalindrom</h3>
    <div>input {str}</div>
    <div>output {isPalindrom ? "true" : "false"}</div>
  </div>
}





// new 
export function SumDifferentArrayValuePairExist() {
  const [input1, setInput1] = useState([1, 2, 3, 4]);
  const [input2, setInput2] = useState([5, 6, 7, 8]);
  const [target, setTarget] = useState(10);

  function handleChange(setter) {
    return (e) => {
      setter(e.target.value.split(",").map((num) => parseInt(num.trim(), 10) || 0));
    };
  }
  function calculate() {
    const valueSet = new Set(input2);
    for (let num of input1) {
      const requiredPair = target - num;
      if (valueSet.has(requiredPair)) {
        return `${num} + ${requiredPair} = ${target}`;
      }
    }
    return "No matching pair found.";
  }

  // o(n^) Time Complexity
  // function calculate() {
  //   for(let i = 0;i < input1.length;i++) {
  //     for(let i2 = 0;i2 < input2.length;i2++) {
  //       const result = input1[i] + input2[i2]
  //       if(result === target) {
  //         return {
  //           first:input1[i],
  //           second:input2[i2]
  //         }
  //       }
  //     }
  //   }
  //   return false
  // }

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔢 Sum Pair Finder</h3>
        <div className="input-side">
          <label className="label">
            Array 1:
            <input
              className="input"
              type="text"
              value={input1.join(",")}
              onChange={handleChange(setInput1)}
              placeholder="Enter numbers, e.g. 1,2,3"
            />
          </label>
          
          <label className="label">
            Array 2:
            <input
              className="input"
              type="text"
              value={input2.join(",")}
              onChange={handleChange(setInput2)}
              placeholder="Enter numbers, e.g. 4,5,6"
            />
          </label>

          <label className="label target">
            Target:
            <input
              className="target"
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              placeholder="Enter target sum"
            />
          </label>
        </div>
        <p><strong>Result:</strong> <span className="output success">Found: {calculate()}</span></p>
        <p className="description">
          The Sum Pair Finder problem involves finding two numbers from two different arrays (or the same array) that sum up to a given target value.
        </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  );
}

export function FirstNoneRepeatingCharacters() {
  const [text, setText] = useState("abcabbiefc");


  function calculate() {
    const array = text.split("")
    const valueSet = array.reduce((aggr,val) => {
      if(!aggr[val]) {
        aggr[val] = 1
      } else {
        aggr[val]++
      }

      return aggr
    },{})

    const keys = Object.keys(valueSet)
    for (let i = 0; i < keys.length;i++) {
      const val = keys[i]
      if (valueSet[val] === 1) {
        return val
      }
    }

    return "No matching odd value."
  }
  

  return (
    <div className="container">
      <div className="result-side">
        <h3>🔢 Get First None Repeated character</h3>
        <label className="label">
          Input Text:
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter numbers, e.g. 4,5,6"
          />
        </label>
        <p><strong>Result:</strong> <span className="output success">Found: {calculate()}</span></p>
        <p className="description">
            This problem requires finding the first character in a string that does not repeat anywhere else.
            <b>✅ Input: "swiss"</b>
            <b>✅ Output: "w" (because 's' appears multiple times, but 'w' is unique and appears first)</b>
          </p>
      </div>

      <pre className="code-box">
        <code>{convertFunctionTemplateLiteral(calculate)}</code>
      </pre>
    </div>
  )
}