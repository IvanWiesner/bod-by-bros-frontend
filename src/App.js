import './App.css';
import MyWorkout from './components/MyWorkout.js';
import WorkoutContainer from './components/WorkoutContainer.js'
import React, { Component } from 'react'
//const cardsURL = "http://localhost:3000/cards/"

export default class App extends Component {
  state = {
    cards: [],
    MyWorkout: []
}
addWorkout=(card)=>{
  if(!this.state.MyWorkout.find(workout=> workout.id==card.id)){
    this.setState({MyWorkout: [...this.state.MyWorkout, card]})
  }
}
// addToWorkout = (card) => {
//   this.setState({MyWorkout:[card]})
//   let foundCard = 
//   this.state.cards.filter(card => 
//   !this.state.MyWorkout.includes(card))
//   return foundCard
//   const foundCard = this.state.MyWorkout.find(
//     element => element.id === card.id
//   )
//   if (foundCard) {this.setState({MyWorkout: card})} 
// }

componentDidMount() {
    fetch('http://localhost:3000/cards/')
    .then(res => res.json())
    .then(cards => this.setState({ cards }))
}
  render() {
    
    return (
      <div className="App">
      <MyWorkout 
      cards={this.state.MyWorkout} 
      addCard={this.addWorkout}  />
      <WorkoutContainer 
      cards={this.state.cards}
      addCard={this.addWorkout}  />
    </div>
    )
  }
}
