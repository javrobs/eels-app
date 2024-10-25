import React from "react"

export default function TitleBar({isHatched}){
    const instruction = isHatched ? "Unbeelievabeel, a new eel!" : "Is that an egg?";

    return (
        <div className='titlebar'>
            <h1>EelSimeelator</h1>
            <h2>This is a game for eels by eels. Weelcome.</h2>
            <span className='m-auto-left'>{instruction}</span>
        </div>
    )
}
