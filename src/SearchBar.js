import { useState } from "react";

function SearchBar(props) {
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const [type,setType] = useState(0)
  const [brand,setBrand] = useState("")

  const searchButtonPressed = ()=>{
   props.callback({name,price,type,brand})
  }
  return (
    <div>
      <h2>Search for an item</h2>
      <form action="">
        <label htmlFor="name-field">Name</label>
        <input id="name-field" type="text" value = {name} onChange = {
          (e)=>{
            setName(e.target.value)
        }} ></input>
        <label htmlFor="price-field">Max Price</label>
        <input id="price-field" type="text" value = {price} onChange = {
          (e)=>{
            setPrice(e.target.value)}}></input>
        <label htmlFor="type-field">Type:</label>
        <input id="type-field" type="text" value ={type}
        onChange = {
          (e)=>{
            setType(e.target.value)}}></input>
        <label htmlFor="brand-field">Brand:</label>
        <input id="brand-field" type="text" value = {brand}
        onChange = {
          (e)=>{
            setBrand(e.target.value)}}></input>
        <button type = "button" onClick = {searchButtonPressed}>Search</button>
      </form>
    </div>
  );
}
export default SearchBar;