import React from 'react'

const Card = ({ title, image, duration }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-img' />
      <h1 className='card-title'>{title}</h1>
      <div className='card-badge'>
        <i className='far fa-clock'></i> {duration} min
      </div>
    </div>
  )
}

export default Card
