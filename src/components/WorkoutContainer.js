import React, { Component } from 'react'
import WorkoutCard from './WorkoutCard.js'

export default class WorkoutContainer extends Component {
    renderCards = () => {
        return (
            this.props.cards.map(card => {
                return (<WorkoutCard addCard={this.props.addCard} key={card.id} card={card}/>)
            })
        )
    }
    render() {
        return (
            <div className="WorkoutContainer">
                {this.renderCards()}
            </div>
        )
    }
}

