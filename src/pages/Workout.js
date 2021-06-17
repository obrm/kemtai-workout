import React, { useState, useEffect } from 'react'

const Workout = () => {
  // eslint-disable-next-line
  const [playing, setPlaying] = useState(false)
  const [counter, setCounter] = useState('')

  useEffect(() => {
    startVideo()
    setTimeout(() => {
      stopVideo()
    }, 30000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCounter(1)
    }, 1000)

    setTimeout(() => {
      setCounter(2)
    }, 2000)

    setTimeout(() => {
      setCounter('GO')
    }, 3000)
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
      <div className='workout-container'>
        <video muted autoPlay className='workout-videoFeed'></video>
        {counter !== 'GO' && <div className='workout-overlay'>{counter}</div>}
        {counter === 'GO' && <div className='workout-go'>{counter}</div>}
      </div>
    </div>
  )
}

export default Workout
