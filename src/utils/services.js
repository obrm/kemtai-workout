export const showScore = (timeOfMove, scoreOfMove, setScore) => {
  let time = 5000

  for (let i = 1; i < timeOfMove.length; i++) {
    time += timeOfMove[i] * 1000
    setTimeout(() => {
      setScore(scoreOfMove[i])
    }, time)
  }
}

export const showCounter = (setCounter, setTimer) => {
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
}
