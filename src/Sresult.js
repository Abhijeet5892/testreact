import React from 'react'

const Sresult = (props) => {
    const img = `https://source.unsplash.com/200*200/?${props.name}`;
  return (
    <div>
      <img src={img} alt='search' />
    </div>
  )
}

export default Sresult
