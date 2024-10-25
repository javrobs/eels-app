import React from "react"
import BodySegment from "./BodySegment"

export default function Eel(props){
    
    function initBody(){
        let body=[];
        let direction;
        const initialPosition = props.seed.initPosition;
        const eelStartLength = 8
        if(initialPosition.y>300){
            direction = 1;
            for(let i=0;i<eelStartLength;i++){
                const bodyItem = {x:initialPosition.x,
                    y:initialPosition.y+(15*i),
                    direction:direction
                }
                body.push(bodyItem);
            }
        } else {
            direction = -1;
            for(let i=0;i<eelStartLength;i++){
                const bodyItem = {x:initialPosition.x,
                    y:initialPosition.y+30-(15*i),
                    direction:direction
                }
                body.push(bodyItem);
            }
        }
        return {body:body,userDirection:direction}
    }
    
    const [eelInnerState,setEelInnerState] = React.useState({...initBody(),isDead:false})

    const directionReference = React.useRef({Up:1,Down:-1,Right:2,Left:-2});
    React.useEffect(()=>{
        function keyPressed(e){
            if (e.key.match(/Arrow/)){
                const newDirection = directionReference.current[e.key.split("Arrow")[1]]
                setEelInnerState(prevState => {
                    switch(newDirection){
                        case prevState.userDirection:
                            console.log("repeat key")
                            return prevState;
                        case -prevState.userDirection:
                            console.log("flip")
                            return {...prevState,
                                body:prevState.body.map(bodyItem=>({...bodyItem,direction:bodyItem.direction*-1})).reverse(),
                                userDirection:-prevState.body[prevState.body.length-1].direction}
                        default:
                    // if (Math.abs(newDirection)!==Math.abs(prevState.userDirection)){
                        return {...prevState,userDirection:newDirection}                    
                    // } else {
                        // return prevState
                    }
                })
            }
        }
        window.addEventListener("keydown",keyPressed)
        return ()=>{window.removeEventListener("keydown",keyPressed)};
    },[])

    React.useEffect(()=>{
        function updatePosition(){
            setEelInnerState((prevState)=>{
                const {velocity} = props.eelState;
                let {body:pastBody,userDirection:futureDirection} = prevState;
                let [newX,newY] = [pastBody[0].x,pastBody[0].y]
                switch(futureDirection){
                    case 1:
                        newY-=velocity;
                        if(newY<0) return {...prevState, isDead:true}
                        break;
                    case -1:
                        newY+=velocity;
                        if(newY>=600) return {...prevState, isDead:true}
                        break;
                    case -2:
                        newX-=velocity;
                        if(newX<0) return {...prevState, isDead:true}
                        break;
                    case 2:
                        newX+=velocity;
                        if(newX>=900) return {...prevState, isDead:true}
                        break;
                }
                let newBodyPart = {x:newX, y:newY, direction:futureDirection}
                if(pastBody.find(each=>each.x==newBodyPart.x&&each.y==newBodyPart.y)) return {...prevState, isDead:true}
                return {...prevState,
                    body:[newBodyPart,
                        ...prevState.body.filter((_,i)=>i<prevState.body.length-1)]
                }
            })
        }
        let updatePos;
        if(!eelInnerState.isDead){
            updatePos = setTimeout(updatePosition,1000);
        }
        return () => {clearTimeout(updatePos)}
    },[eelInnerState.body])

    const BodySegments = []
    for(let i = 0 ; i < eelInnerState.body.length ; i++){
        let type = "";
        const bodySegmentData = eelInnerState.body[eelInnerState.body.length-1-i];
        let direction = bodySegmentData.direction;
        if (i == 0) {
            type += "end";
            direction = -direction;
        } 
        if (i == eelInnerState.body.length-1) {
            type += "face";
            if(eelInnerState.isDead) type += " dead"
        }
        // switch(bodySegmentData.direction){

        // }
        BodySegments.push(<BodySegment color={i%2?props.seed.color1:props.seed.color2} id={`bodyseg-${i}`} key={`bodyseg-${i}`} type={type} direction={direction} position={bodySegmentData}/>)
    }

    console.log(eelInnerState.body.map(each=>`${each.direction},${each.cornerDirection}`),eelInnerState.userDirection)

    return (<>
    {BodySegments}
    </>
    )
}