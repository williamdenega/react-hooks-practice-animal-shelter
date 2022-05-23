import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, value}) {

  const filteredList = pets.filter((pet)=> pet.type === value )

  if(value === 'all'){
    return <div className="ui cards">{pets.map((pet)=> < Pet key={pet.id} pet={pet}/>)}</div>;
  }
  return <div className="ui cards">{filteredList.map((pet)=> < Pet key={pet.id} pet={pet}/>)}</div>;
}

export default PetBrowser;
