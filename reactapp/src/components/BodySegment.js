import React from "react";


export default function BodySegment({type,position,direction,color,id}){
    const style={
        top:`${position.y}px`,
        left:`${position.x}px`,
        backgroundColor:color
    }
    return (<div className={`segment ${type} direction-${direction}`} id={id} style={style}/>)
}