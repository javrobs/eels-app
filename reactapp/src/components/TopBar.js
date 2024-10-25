import React,{useState} from "react";

export default function TopBar(){
    const [styles,changeStyle] = useState({
        background:"red",
        height:"100px",
        transition:".3s",
    })

    function mouseEnterHandler(){
        changeStyle(style=>({...style,background:"blue"}))
    }

    function mouseLeaveHandler(){
        changeStyle(style=>({...style,background:"red"}))
    }

    return <div style={styles} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}></div>
}
