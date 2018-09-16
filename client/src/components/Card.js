import React from 'react'

class Card extends React.Component {
  state = {
    id: this.props.id,
    question: this.props.question,
    answer: this.props.answer,
    showQuestion: true,
    showAnswer: false,
    editing: false
  }

  swapShowQuestion = () => {
    this.setState({ showQuestion: !this.state.showQuestion })
  }

  shouldShowQuestion = () => {
    if(this.state.showQuestion) {
      return (
        <React.Fragment>
          <span className="card-title">Question:</span>
          <p>{this.state.question}</p>
        </React.Fragment>
      )
    }
  }

  swapShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  shouldShowAnswer = () => {
    if(this.state.showAnswer) {
      return (
        <React.Fragment>
          <span className="card-title">Answer:</span>
          <p>{this.state.answer}</p>
        </React.Fragment>
      )
    }
  }

  swapEditing = () => {
    if(this.state.editing) {
      this.setState({ editing: false, showQuestion: true})
    } else {
      this.setState({
        editing: true,
        showQuestion: false,
        showAnswer: false
      })
    }
  }

  handleChange = (e) => {
    if(e.target.name === 'question') {
      this.setState({question: e.target.value})
    }

    if(e.target.name === 'answer') {
      this.setState({answer: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id, question, answer } = this.state
    this.props.updateCard(id, question, answer)
    this.swapEditing()
    this.swapShowAnswer()
  }

  shouldShowEditing = () => {
    if(this.state.editing) {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit} >
            <span className="card-title">Question</span>
            <input
              className="white-text"
              name="question"
              placeholder="Question"
              value={this.state.question}
              onChange={this.handleChange}
            />
            <span className="card-title">Answer</span>
            <input
              className="white-text"
              name="answer"
              placeholder="Answer"
              value={this.state.answer}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Save"
              className="btn"
            />
          </form>
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
              {this.shouldShowEditing()}
              {this.shouldShowQuestion()}
              {this.shouldShowAnswer()}
            </div>
            <div className="card-action">
              <div style={styles.margin}
                onClick={this.swapShowAnswer}
                className="btn waves-effect"
              >
                {this.state.showAnswer ? 'Hide Answer' : 'Show Answer'}
              </div>
              <div style={styles.margin}
                className="btn waves-effect"
                onClick={this.swapEditing}
              >
                Edit
              </div>
              <div className="btn red waves-effect"
                onClick={() => this.props.deleteCard(this.props.id)}
              >
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
