import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Bar = ({ id, height, time }) => {
  const [grow, setGrow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setGrow(true)
    }, time)
  }, [time])

  return (
    <div
      className={`bar-${id} bar ${grow && 'grow'} ${
        grow && height > 90 && 'green'
      }`}
      style={{
        height: grow ? height : '17px',
        transform: grow ? `translateY(-${height - 17}px)` : null,
      }}
    ></div>
  )
}

Bar.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
}

export default Bar
