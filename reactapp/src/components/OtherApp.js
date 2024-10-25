import React from "react"
import TopBar from "./TopBar"

export default function OtherApp(){
    const [reed,changeReed] = React.useState(["Reed","Langerud"]);
    const [buttonContent,changeButtonContent] = React.useState("Cunt");
    let buttonContentAgain = "cunt";

    const style = {
        color: "red",
        fontSize: "20px"
    }

    const dontSayThat = ({target}) => {
        console.log(target);
        changeButtonContent("Dont say that :(");
        changeReed([...reed,"David"]);
    }

    const elements = reed.map((each,i) =>{
        const div =<div key={i} id={i} style={style}>{each}</div>;
        console.log(div);
        return div
    })

    return <>
    <TopBar/>
    <h1>Hello My name is Reed</h1>
    <button onClick={dontSayThat}>{buttonContent}</button>
    {reed.length}
    {elements}
    
    </>
}