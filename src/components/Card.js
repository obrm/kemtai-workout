import React from 'react'

const Card = ({ id, title, image, duration, isActive, onClickHandler }) => {
  return (
    <div
      className={`card ${isActive === null ? '' : isActive ? 'active' : ``}`}
      onClick={() => onClickHandler(id)}
    >
      <img src={image} alt={title} className='card-img' loading='lazy' />
      <h1 className='card-title'>{title}</h1>
      <div className='card-badge'>
        <i className='far fa-clock'></i> {duration} min
      </div>
      <div className={isActive !== null && !isActive && 'not-active'}></div>
    </div>
  )
}

export default Card
