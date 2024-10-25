import React from "react";

export default function ScreenBg(){
    const [backPos,setBackPos]=React.useState([0,0])
    const style={background:`radial-gradient(circle farthest-side at ${backPos[0]}px ${backPos[1]}px,#00869d,#092938)`}
    
    function backgroundHover(e){
        // console.log(e)
        // console.log(e.clientX,e.clientY,e.target.getBoundingClientRect())
        const {clientX, clientY, currentTarget} = e;
        const {x, y} = currentTarget.getBoundingClientRect()
        setBackPos([(clientX-x),(clientY-y)])
    }

    return (
        <div className="screen-bg" style={style} onMouseMove={backgroundHover}></div>
    )
}