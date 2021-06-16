import React, { useState } from 'react'

import Card from './Card'
import cards from '../utils/cards'

const Container = () => {
  const [clicked, setClicked] = useState(false)
  const [ID, setID] = useState(null)

  const onClickHandler = (id) => {
    setClicked(true)
    setID(id)
  }

  return (
    <section className='container'>
      <h2>{clicked ? `Let's Go` : `Choose a short workout`}</h2>
      <div className='cards-container'>
        {cards.map((card) => {
          return (
            <Card
              id={card.id}
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
    </section>
  )
}

export default Container
