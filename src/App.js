import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {"name" in data ? data["name"] : "No data"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No data"}</p>
      <p>Type: {"type" in data ? data["type"] : "No data"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No data"}</p>
    </div>
  );
}

export default App;
