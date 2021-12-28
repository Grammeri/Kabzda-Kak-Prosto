import React from "react";

export type ControlledOnOffPropsType = {
    on:boolean
    onChange:(on:boolean)=>void
    component?:typeof ControlledOnOff
}
export function ControlledOnOff (props:ControlledOnOffPropsType){

    const onStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: props.on ? "green" : "white",
        padding:"2px",
        display:"inline-block",
        marginLeft: "10px",
        border:"1px solid black"
    }
    const offStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: props.on ? "white" : "red",
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
        backgroundColor: props.on ? "green" : "red"
    }


    return(
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>ON</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>OFF</div>
            <div style={bulbStyle}></div>

        </div>
    )
}