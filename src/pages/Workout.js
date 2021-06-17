import React, { useState, useEffect } from 'react'

const Workout = () => {
  // eslint-disable-next-line
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    startVideo()
    setTimeout(() => {
      stopVideo()
    }, 30000)
  }, [])

  const HEIGHT = 570
  const WIDTH = 365

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
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className='workout-videoFeed'
        ></video>
      </div>
    </div>
  )
}

export default Workout
