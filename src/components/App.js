import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [value, setValue] = useState('all')


  useEffect(()=>{
    fetch(`http://localhost:3001/pets`)
    .then((r)=> r.json())
    .then(setPets)

  },[])


  const handleSearch = ()=>{
    setValue(filters.type)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} handleSearch={handleSearch}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} value={value}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
