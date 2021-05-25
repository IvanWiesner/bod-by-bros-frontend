import './App.css';
import MyWorkout from './components/MyWorkout.js';
import WorkoutContainer from './components/WorkoutContainer.js'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    cards: [],
    MyWorkout: []
}
addToWorkout = (card) => {
  const foundCard = this.state.MyWorkout.find(
    element => element.id === card.id
  )
  console.log(foundCard)
}
componentDidMount() {
    fetch('http://localhost:3000/cards/')
    .then(res => res.json())
    .then(cards => this.setState({ cards }))
}
  render() {
    
    return (
      <div className="App">
      <MyWorkout />
      <WorkoutContainer 
      cards={this.state.cards}
      addCard={this.addToWorkout}/>
    </div>
    )
  }
}
