import React from 'react'

const styles = {
  margin: { marginRight: '5px' },
  pointer: { cursor: 'pointer' }
}

const Card = ({ id, question, answer, show, updateCard, deleteCard }) => { 
  if(show) {
    return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Question</span>
            <p>{question}</p>
            <span className="card-title">Answer</span>
            <p>{answer}</p>
          </div>
          <div className="card-action">
            <div onClick={() => updateCard(id)} style={styles.margin} className="btn waves-effect">
              Reveal Answer
            </div>
            <div className="btn red waves-effect" onClick={() => deleteCard(id)}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Question</span>
            <p>{question}</p>
          </div>
          <div className="card-action">
            <div onClick={() => updateCard(id)} style={styles.margin} className="btn waves-effect">
              Reveal Answer
            </div>
            <div className="btn red waves-effect" onClick={() => deleteCard(id)}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Card
