import React from 'react'
import PropTypes from 'prop-types'

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
      <div className={isActive !== null && !isActive ? 'not-active' : ''}></div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
}

Card.defaultProps = {
  isActive: null,
}

export default Card
