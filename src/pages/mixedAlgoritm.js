import {ArrayTemplateLiteral, CopyObjectMethods, DebounceWindowResize, DeepCopyObject, FibonacciSimpleRecursion, FibonacciWithoutStackError, FindMax, FirstNoneRepeatingCharacters, GeneratePrimeChecker, GetAllDigitsSum, IsPalindrome, MaxTwoAdjacentNumberMultiple, MaxTwoNumberMultiple, MemoizedFibonacci, MemoizeObjectFactorial, ObjectInputTemplateLiteral, ObjectToTemplateLiteral, Publish_Subscribe, RemoveDuplicates, SumDifferentArrayValuePairExist, ThrottleWindowScroll } from "../algoritms/mixedAlgoritm.js";

export default function MixedAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Mixed Algoritm</h1>



        {/* copy object deeply */}
        <DeepCopyObject/>
        <CopyObjectMethods />
        <MemoizeObjectFactorial />


        {/* fibonaci */}
        <FibonacciWithoutStackError />
        <FibonacciSimpleRecursion />
        <MemoizedFibonacci />

        {/*international interview quetion */}
        <SumDifferentArrayValuePairExist/>
        <FirstNoneRepeatingCharacters/>

        {/* <FindMax /> */}
        {/* <IsPalindrome /> */}
        {/* <GeneratePrimeChecker/>  */}
        {/* <MaxTwoNumberMultiple /> */}
        {/* <MaxTwoAdjacentNumberMultiple /> */}
        {/* <GetAllDigitsSum /> */}

        {/* <RemoveDuplicates/> */}

        {/* <Publish_Subscribe /> */}

        {/* <ThrottleWindowScroll/> */}
        {/* <DebounceWindowResize/> */}

        
        {/* <ObjectToTemplateLiteral /> */}
        {/* <ArrayTemplateLiteral /> */}
      </div>
    )
}