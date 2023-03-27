import React ,{useState} from 'react'
import RealApiCall from './RealApiCall'
import Input from './Contest_input'
import "../../../css/Contest.css"


function Contests() {
  const [p, sp] = useState("");

  function setter(platformName) {
    // console.log(platformName)
    sp(platformName); 
  } 
  return ( 
    <div className='contest'>
    <h1>Upcoming Contest List</h1>
    <Input clickee={setter} />
        <RealApiCall platformName={p}/>
    </div>
  )
}

export default Contests