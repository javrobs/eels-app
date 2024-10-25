import React from "react";
import ScreenBg from "./ScreenBg"
import Egg from "./Egg"
import Eel from "./Eel"
import Score from "./Score"
import TitleBar from "./TitleBar"

export default function App(){
    console.log("rerendered")
    const colors = React.useRef(["yellow","red","green","blue","purple","white"])
    const seed =  React.useRef({color1:colors.current[Math.floor(Math.random()*colors.current.length)],
        color2:colors.current[Math.floor(Math.random()*colors.current.length)],
        initPosition:{x:Math.ceil(Math.random()*58)*15,y:Math.ceil(Math.random()*37)*15},
        
    })
    
    const [eelState,setEelState] = React.useState({
        hatched:false,
        alive:true,
        score:0,
        velocity:30,
    });

    function die(){
        setEelState(prevEelState=>{
            console.log("RIP Eel");
            return {...prevEelState,alive:false}
        })
    }

    const audio = new Audio('/static/frontend/hatch.mp3');
    function hatch(){
        audio.play()
        setEelState(prevEelState=>{
            return {...prevEelState,hatched:true}
        })
    }

    function EelOrEgg() {
        if (eelState.hatched){
            return (<>
            <Eel setEelState={setEelState}
            seed={seed.current}
            eelState={eelState}
            die={die}/>
            <Score eelState={eelState}/>
            </>)
        } else {
            return <Egg hatch={hatch}
            color1={seed.current.color1}
            color2={seed.current.color2}
            posX={seed.current.initPosition.x}
            posY={seed.current.initPosition.y}/>
        }
    }
    
    
    

    
    

    return (
    <div className='container'>
        <TitleBar isHatched={eelState.hatched}/>
        <div className='screen'>
            <ScreenBg/>
            <EelOrEgg/>
        </div>
    </div>
    )
}