import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Webcam from 'react-webcam'

import Loader from '../layouts/Loader'
import PieTimer from '../components/PieTimer'

const Workout = () => {
  // eslint-disable-next-line
  const [playing, setPlaying] = useState(true)
  const [counter, setCounter] = useState('')
  const [loading, setLoading] = useState(true)
  const [timer, setTimer] = useState(false)

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setTimeout(() => {
      history.push('/')
    }, 66500)
  }, [history])

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setCounter(1)
      }, 1000)

      setTimeout(() => {
        setCounter(2)
      }, 2000)

      setTimeout(() => {
        setCounter('GO')
      }, 3000)

      setTimeout(() => {
        setCounter('')
        setTimer(true)
      }, 4000)
    }, 500)
  }, [])

  const videoConstraints = {
    facingMode: 'user',
  }

  return (
    <div className='workout'>
      {loading && <Loader />}
      <div className='workout-container'>
        <Webcam
          className='workout-webcam'
          videoConstraints={videoConstraints}
        />
        {counter !== 'GO' && <div className='workout-counter'>{counter}</div>}
        {counter === 'GO' && <div className='workout-go'>{counter}</div>}
        <div className='pie-timer'>{timer && <PieTimer duration={60} />}</div>
      </div>
    </div>
  )
}

export default Workout
