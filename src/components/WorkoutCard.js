import React, { useState } from "react"


export default function WorkoutCard({ card, addCard }) {
    // const [lift, setLift] = useState("");
    // console.log(lift)
    // const handleSubmit = (e) => {
    // e.preventDefault();
    // fetch('http://localhost:3000/lifts', {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     lift: oneRM,
    //   }),
    // })
    //.then((response) => response.json())
    //.then(console.log)

    return (
        <div className="WorkoutCard">
            <h1>{card.name}</h1>
            <img className="image" src={card.image} />
            <p>{card.description}</p>
            <form className="lift-form">
                <label>Enter 1 RM: </label>
                <input 
                className="weight" 
                placeholder="DYEL BRO"
                //onChange={(e) => setLift(e.target.value)} 
                >
                </input>
                <button 
                    onClick=
                    {addCard}
                    type="submit" 
                    className="lift">
                    Log weight
                    </button>    
            </form>
            <button onClick={() => addCard(card)} className="workout-button">Add to workout</button>
        </div>
    )
}

