import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const PieTimer = ({ duration }) => {
  const [count, setCount] = useState(0)
  const [lightMask, setLightMask] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLightMask(false)
    }, 1000)
    const timer = setInterval(() => {
      setCount((prev) => prev + 1)
      if (count === duration) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [count, duration])

  return (
    <div className={`timer ${count >= duration + 0.5 ? 'final-mask' : ''}`}>
      <div
        className='rotator'
        style={{ transform: `rotate(${(count / duration) * 360}deg)` }}
      ></div>
      <div
        className={`mask ${lightMask ? 'light-mask' : ''} ${
          count / duration > 0.5 ? 'second-mask' : ''
        }`}
      ></div>
    </div>
  )
}

PieTimer.propTypes = {
  duration: PropTypes.number,
}

PieTimer.defaultProps = {
  duration: 10,
}

export default PieTimer
