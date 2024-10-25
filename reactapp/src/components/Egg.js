import React from "react";

export default function Egg({color1,color2,posY,posX,hatch}){
    const styles = {
        background:`radial-gradient(${color1} 25%, ${color2} 50%,${color1} 75%,${color2} 100%)`,
        top:`${posY}px`,
        left:`${posX}px`
    }
    
    return (
    <div className='egg' style={styles} onClick={hatch}></div>
    )
}