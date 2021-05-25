import React from 'react'

export default function WorkoutCard({ card, addCard }) {
    return (
        <div className="WorkoutCard">
            <h1>{card.name}</h1>
            <img className="image" src={card.image} />
            <p>{card.description}</p>
            <form>
                <label>Enter 1 RM: </label>
                <input className="weight" placeholder="DYEL BRO"></input>
                <input onSubmit={addCard} type="submit" value="Lift!" className="lift"></input>
            </form>
        </div>
    )
}
