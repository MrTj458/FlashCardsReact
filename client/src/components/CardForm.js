import React from 'react'

class TodoForm extends React.Component {
  state = { question: '', answer: '' }

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
    this.props.addCard(this.state.question, this.state.answer)
    this.setState({question: '', answer: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='question'
          placeholder='Question'
          required
          value={this.state.question}
          onChange={this.handleChange}
        />
        <input
          name='answer'
          placeholder='Answer'
          required
          value={this.state.answer}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          className="btn"
          value="Create New Card"
        />
      </form>
    )
  }
}

export default TodoForm
