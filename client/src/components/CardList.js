import React from 'react'
import Card from './Card'

const CardsList = ({ cards, updateCard, deleteCard }) => (
  <div className="row">
    { cards.map( card =>
        <Card
          key={card.id}
          {...card}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      )
    }
  </div>
)

export default CardsList
