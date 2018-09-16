import React from 'react';
import CardForm from './components/CardForm'
import CardList from './components/CardList'

class App extends React.Component {
  state = { cards: [] }

  componentDidMount() {
    fetch('api/cards')
      .then(res => res.json())
      .then(cards => this.setState({cards}))
  }

  addCard = (question, answer) => {
    const card = { question, answer }
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(card)
    }).then(res => res.json())
      .then(card => {
        const { cards } = this.state
        this.setState({ cards: [card, ...cards] })
      })
  }

  updateCard = (id, question, answer) => {
    const updatedCard = {id, question, answer}
    fetch(`/api/cards/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedCard)
    }).then(res => res.json())
      .then(card => {
        const cards = this.state.cards.map(c => {
          if(c.id === id) {
            return card
          }
          return c
        })
        this.setState({cards})
      })
  }

  deleteCard = (id) => {
    fetch(`/api/cards/${id}`, { method: 'DELETE' })
      .then(() => {
        const { cards } = this.state
        this.setState({ cards: cards.filter(c => c.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <CardForm addCard={this.addCard} />
        <CardList
          cards={this.state.cards}
          updateCard={this.updateCard}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
