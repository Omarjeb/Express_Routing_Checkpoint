import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = ({list}) => {
  
  return (
    <div className='card-container'>{
      list.map((el)=><div className='card'>
    <Link to={`/details/${el.id}`}><img className='image' src={el.image} alt="404" /></Link>
      </div>)
    }</div>
  )
}

export default About