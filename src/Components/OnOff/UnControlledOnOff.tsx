import React, {useState} from "react";

type OnOffPropsType = {
onChange:(on:boolean)=>void
    defaultOn?: boolean
}

export function UnControlledOnOff (props:OnOffPropsType){
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: on ? "green" : "white",
        padding:"2px",
        display:"inline-block",
        marginLeft: "10px",
        border:"1px solid black"
    }
    const offStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: on ? "white" : "red",
        padding:"2px",
        display:"inline-block",
        marginLeft: "10px",
        border:"1px solid black"
    }
    const bulbStyle = {
        width: "50px",
        height: "50px",
        border:"1px solid black",
        borderRadius:"30px",
        display:"inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return(
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={bulbStyle}></div>

        </div>
    )
}