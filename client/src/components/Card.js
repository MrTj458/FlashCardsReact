import React from 'react'

const styles = {
  margin: { marginRight: '5px' },
  pointer: { cursor: 'pointer' }
}

const Card = ({ id, question, answer, updateCard, deleteCard }) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <p>{question}</p>
        </div>
        <div className="card-action">
          <div style={styles.margin} className="btn waves-effect">
            Flip
          </div>
          <div className="btn red waves-effect" onClick={() => deleteCard(id)}>
            Delete
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
