import React, {useState} from "react";

type PropsType = {
   /* on: boolean*/
}

function OnOff(props: PropsType) {
    console.log('OnOff rendered')

    let [on,setOn] = useState(false);

    console.log("on: " + on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white " : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff;

/*
export type OnOffPropsType = {
    on: boolean
    off: boolean
}

function OnOff(props: OnOffPropsType) {

    if (props.on === true && props.off === false) {
        return (
            <div>
                <span><button className={"green"}>On</button></span>
                <span><button>Off</button></span>
            </div>
        )
    } else if (props.on === false && props.off === true) {
        return (
            <div>
                <span><button>On</button></span>
                <span><button className={"red"}>Off</button></span>
            </div>
        )
    } else {
        return null
    }
}*/
