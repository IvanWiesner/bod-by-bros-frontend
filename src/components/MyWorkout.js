import React from 'react'
import WorkoutCard from './WorkoutCard.js'

export default function MyWorkout({ cards, addCard }) {
    const renderWorkout = () => {
        return (
            cards.map(card => {
                return (<WorkoutCard addCard={addCard} key={card.id} card={card}/>)
            })
        )
    }
    return (
        <div className="MyWorkout">
            
            {renderWorkout()}
        </div>
    )
}
