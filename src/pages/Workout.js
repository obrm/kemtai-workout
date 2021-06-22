import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Webcam from 'react-webcam'

import useWindowSize from '../hooks/useWindowSize'

import Loader from '../layouts/Loader'
import PieTimer from '../components/PieTimer'
import Bar from '../components/Bar'

import reps from '../data/reps'
import { showScore, showCounter } from '../utils/services'

const Workout = () => {
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

    showScore(timeOfMove, scoreOfMove, setScore)

    setTimeout(() => {
      history.push('/')
    }, 66500)
  }, [history])

  useEffect(() => {
    showCounter(setCounter, setTimer)
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
            return <Bar key={i} number={i + 1} height={height} time={time} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Workout
