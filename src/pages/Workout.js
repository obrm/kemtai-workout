import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
    startVideo()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setTimeout(() => {
      stopVideo()
    }, 67000)
    setTimeout(() => {
      history.push('/')
    }, 68000)
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

  const startVideo = () => {
    setPlaying(true)
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('workout-videoFeed')[0]
        if (video) {
          video.srcObject = stream
        }
      },
      (err) => console.error(err)
    )
  }

  const stopVideo = () => {
    setPlaying(false)
    let video = document.getElementsByClassName('workout-videoFeed')[0]
    video.srcObject.getTracks()[0].stop()
  }

  return (
    <div className='workout'>
      {loading && <Loader />}
      <div className='workout-container'>
        <video muted autoPlay className='workout-videoFeed'></video>
        {counter !== 'GO' && <div className='workout-counter'>{counter}</div>}
        {counter === 'GO' && <div className='workout-go'>{counter}</div>}
        <div className='pie-timer'>{timer && <PieTimer duration={60} />}</div>
      </div>
    </div>
  )
}

export default Workout
