import { CopyObjectMethods, DebounceWindowResize, FirstNoneRepeatingCharacters, GeneratePrimeChecker, IsPalindrome, MemoizeObjectFactorial, Publish_Subscribe, SumDifferentArrayValuePairExist, ThrottleWindowScroll } from "../algoritms/mixedAlgoritm.js";

export default function MixedAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Mixed Algoritm</h1>

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