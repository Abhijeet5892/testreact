import React, { useContext } from 'react'
//import ComC from './ComC'
import { fname, lname } from '../App'

const ComB = () => {
    const fristname = useContext(fname);
    const lastname = useContext(lname);
    

  return (
    <div>
      <h1> my name is {fristname} ,{lastname}</h1>
    </div>
  )
}

export default ComB
