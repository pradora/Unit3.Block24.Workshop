import './App.css'
import {puppyList} from './data.js'
import React, {useState} from 'react'


function App() {
  console.log(puppyList);
  // Remember that useState returns an array. And, the array contains two elements. 
  // The first is the value that you are storing. The second is a function, 
  // which you can use to reset the value. You can 
  // deconstruct both of those values from the array, ending up with this:
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);
  // console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup); 

  return (
    <>
      {puppies.map((puppy) => {
        return <p onClick={() => { setfeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })}
      
      <p> {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} </p>  


    </>
  );
}

export default App
