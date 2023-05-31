import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
    const {id}=useParams()
    const el=list.find((el)=>id==el.id)
  return (
    <div>
    <div className="home-container">
      <img
        src={el.image}
        alt="404"
      />
      <div className="content">
        <h2>{el.name}</h2>
        <p>
         {el.info}
        </p>
        <span className="test">
        {el.price}
        </span>
      </div>
    </div>
    </div>
  )
}

export default Details
