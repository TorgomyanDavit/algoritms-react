import { FirstNoneRepeatingCharacters, GeneratePrimeChecker, IsPalindrome, MemoizeObject, Publish_Subscribe, SumDifferentArrayValuePairExist } from "../algoritms/mixedAlgoritm.js";

export default function MixedAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Mixed Algoritm</h1>

        <MemoizeObject />
        <Publish_Subscribe />
        <IsPalindrome />
        <GeneratePrimeChecker/>

        {/*international interview quetion */}
        <SumDifferentArrayValuePairExist/>
        <FirstNoneRepeatingCharacters/>
      </div>
    )
}