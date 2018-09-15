import React from 'react'

class Card extends React.Component {

  shouldShow = () => {
    if(this.props.show) {
      return (
        <React.Fragment>
          <span className="card-title">Answer</span>
          <p>{this.props.answer}</p>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Question</span>
              <p>{this.props.question}</p>
              {this.shouldShow()}
            </div>
            <div className="card-action">
              <div onClick={() => this.props.updateCard(this.props.id)} style={styles.margin} className="btn waves-effect">
                Reveal Answer
              </div>
              <div className="btn red waves-effect" onClick={() => this.props.deleteCard(this.props.id)}>
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  margin: { marginRight: '5px' },
  pointer: { cursor: 'pointer' }
}

export default Card
