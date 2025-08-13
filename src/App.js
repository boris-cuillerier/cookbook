import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    });
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  loadExample = () => {
    this.setState({ recettes });
  }

  render () {
    const cards = Object.keys(this.state.recettes).map(key => {
      return <Card key={key} details={this.state.recettes[key]} />;
    })
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          { cards }
        </div>
        <Admin
          ajouterRecette={this.ajouterRecette}
          loadExample={this.loadExample} />
      </div>
    )
  }
}

export default App
