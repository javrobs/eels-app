import React from "react";


export default function Screen({eelState}){
    return (
    <div className="score">
        <span>Score:{eelState.score}</span>
        <span>Veelocity:{eelState.velocity}</span>
    </div>)
}