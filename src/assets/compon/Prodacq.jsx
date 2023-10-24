import React from 'react'

function Prodacq(props) {
  return (
<div className='col-md-4 prod'> 
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    <h3>{props.price}</h3>

</div>  )
}

export default Prodacq