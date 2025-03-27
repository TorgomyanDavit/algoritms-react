import { BubbleSort, GenerateMergeSort, GenerateQuickSort, InsertionSort, SelectionSort } from "../algoritms/sorting";

export default function SortingAlgoritm() {

 
  

    return (
      <div className="page">
        <h1 className="title">Sorting Algoritm</h1>

        <GenerateMergeSort />
        <GenerateQuickSort />
        <BubbleSort />
        <SelectionSort />
        <InsertionSort />
      </div>
    )
}