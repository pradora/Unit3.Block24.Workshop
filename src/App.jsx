
import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'
function App() {
  console.log(puppyList);
  // Remember that useState returns an array. And, the array contains two elements. 
  // The first is the value that you are storing. The second is a function, 
  // which you can use to reset the value. You can 
  // deconstruct both of those values from the array, ending up with this:
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);

  

  return (
    <>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>
      })}
    </>
  )
}

export default App
