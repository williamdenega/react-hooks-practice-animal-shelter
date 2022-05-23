import React, {useState} from "react";

function Pet({pet}) {
  const {type,gender,age,weight,name} = pet
  const [isAdopted, setIsAdopted] = useState(pet.isAdopted)
  
  const handleAdopt = ()=>{
    setIsAdopted(true)
  }

  const handleGender = ()=>{
    if(gender === 'male'){
      return "♀"
    }
    return "♂"
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {name}
          {handleGender()}
          
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted 
          ? <button className="ui disabled button">Already adopted</button>
          : <button className="ui primary button" onClick={handleAdopt}>Adopt pet</button>
          }
        
        
      </div>
    </div>
  );
}

export default Pet;
