import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Webcam from 'react-webcam'

import useWindowSize from '../hooks/useWindowSize'

import Loader from '../layouts/Loader'
import PieTimer from '../components/PieTimer'
import Bar from '../components/Bar'

import reps from '../utils/reps'

const Workout = () => {
  // eslint-disable-next-line
  const [playing, setPlaying] = useState(true)
  const [counter, setCounter] = useState('')
  const [loading, setLoading] = useState(true)
  const [score, setScore] = useState(reps.scoreOfMove[0])
  const [timer, setTimer] = useState(false)

  const history = useHistory()

  const { height } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

    const { timeOfMove, scoreOfMove } = reps

    let time = 5000

    for (let i = 1; i < timeOfMove.length; i++) {
      time += timeOfMove[i] * 1000
      setTimeout(() => {
        setScore(scoreOfMove[i])
      }, time)
    }

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
        {timer && (
          <>
            <div className='score'>
              <span>{score}</span>
            </div>
            <div className='pie-timer'>
              <PieTimer duration={60} />
            </div>
          </>
        )}
        <div className='bars' style={{ top: height - 80 }}>
          {reps.scoreOfMove.map((height, i) => {
            let time = 800
            time += reps.timeOfMove[i] * 3500
            return <Bar key={i} id={i + 1} height={height} time={time} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Workout
