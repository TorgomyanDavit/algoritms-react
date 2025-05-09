import { BinarySearch, DFSArrayExample, HashingSearch, HashingTextSearch, LineirSearch, TernarySearch } from "../algoritms/search";

export default function SearchingAlgoritm() {

  return (
    <div className="page">
      <h1 className="title">Searching Algoritm</h1>
      <HashingSearch/>
      <TernarySearch/>
      <BinarySearch/>
      <LineirSearch/>
      <DFSArrayExample/>
    </div>
  )
}