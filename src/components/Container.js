import React from 'react'

import Card from './Card'
import cards from '../utils/cards'

const Container = () => {
  return (
    <section className='container'>
      <h2>Choose a short workout</h2>
      <div className='cards-container'>
        {cards.map((card) => {
          const { id, title, image, duration } = card
          return (
            <Card id={id} title={title} image={image} duration={duration} />
          )
        })}
      </div>
    </section>
  )
}

export default Container
