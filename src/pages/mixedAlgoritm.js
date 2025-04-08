import {ArrayTemplateLiteral, CopyObjectMethods, DebounceWindowResize, DeepCopyObject, FibonacciSimpleRecursion, FibonacciWithoutStackError, FindMax, FirstNoneRepeatingCharacters, GeneratePrimeChecker, GetAllDigitsSum, IsPalindrome, MaxTwoAdjacentNumberMultiple, MaxTwoNumberMultiple, MemoizedFibonacci, MemoizeObjectFactorial, ObjectInputTemplateLiteral, Publish_Subscribe, RemoveDuplicates, SumDifferentArrayValuePairExist, ThrottleWindowScroll } from "../algoritms/mixedAlgoritm.js";

export default function MixedAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Mixed Algoritm</h1>

        <ArrayTemplateLiteral />

        {/* fibonaci */}
        <FibonacciWithoutStackError />
        <FibonacciSimpleRecursion />
        <MemoizedFibonacci />



        <FindMax />
        <GetAllDigitsSum />
        <MaxTwoNumberMultiple />
        <MaxTwoAdjacentNumberMultiple />
        <RemoveDuplicates/>
        <DeepCopyObject/>
        <CopyObjectMethods />
        <MemoizeObjectFactorial />
        <Publish_Subscribe />
        <IsPalindrome />
        <GeneratePrimeChecker/> 

        {/*international interview quetion */}
        <SumDifferentArrayValuePairExist/>
        <FirstNoneRepeatingCharacters/>
        <ThrottleWindowScroll/>
        <DebounceWindowResize/>
      </div>
    )
}