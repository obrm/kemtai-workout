import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Bar = ({ number, height, time }) => {
  const [grow, setGrow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setGrow(true)
    }, time)
  }, [time])

  return (
    <div
      className={`bar-${number} bar ${grow && 'grow'} ${
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
  number: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
}

export default Bar
