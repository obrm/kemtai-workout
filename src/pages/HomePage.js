import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../components/Card'
import Loader from '../layouts/Loader'
import cards from '../utils/cards'

const HomePage = () => {
  const [clicked, setClicked] = useState(false)
  const [ID, setID] = useState(null)
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const onClickHandler = (id) => {
    setClicked(true)
    setID(id)
    setTimeout(() => {
      setLoading(true)
    }, 800)
    setTimeout(() => {
      history.push('/workout')
    }, 3000)
  }

  return (
    <section className='container'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>{clicked ? `Let's Go` : `Choose a short workout`}</h2>
          <div className='cards-container'>
            {cards.map((card) => {
              return (
                <Card
                  key={card.id}
                  {...card}
                  isActive={
                    clicked && ID === card.id
                      ? true
                      : clicked && ID !== card.id
                      ? false
                      : null
                  }
                  onClickHandler={onClickHandler}
                />
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default HomePage
