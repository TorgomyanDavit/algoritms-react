import x from "../data/getSomeIdData.json"

export function CuriousJsonStringify({count}) {
    // const fibonacciSequence = [0, 1];
    const inputArray = [1,null,undefined,() => "",NaN]
    const inputObject = {age:25,name:NaN,func:() => "",country:null,city:undefined}
  
    function convertArrayToTemplateLiteral(arr) {
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