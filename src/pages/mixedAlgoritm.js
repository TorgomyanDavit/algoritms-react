import { CopyObjectMethods, DebounceWindowResize, DeepCopyObject, FirstNoneRepeatingCharacters, GeneratePrimeChecker, IsPalindrome, MaxTwoAdjacentNumberMultiple, MaxTwoNumberMultiple, MemoizeObjectFactorial, Publish_Subscribe, RemoveDuplicates, SumDifferentArrayValuePairExist, ThrottleWindowScroll } from "../algoritms/mixedAlgoritm.js";

export default function MixedAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Mixed Algoritm</h1>
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