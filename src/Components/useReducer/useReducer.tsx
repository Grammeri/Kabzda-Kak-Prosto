import React, {useReducer} from "react";
import {reducer} from "./separateReducer";

type AccordionForReducerPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:()=>void
    }



export function AccordionForReduer(props: AccordionForReducerPropsType) {
    debugger
    console.log("UncontrolledAccordion rendered")

    //const [collapsed,setCollapsed] = useState(false)
    const [state,dispatch] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            {/* <AccordionTitle={props.titleVAlue} onClick={()=>{(}setCollapsed(!collapsed)}}/>}*/}
            <AccordionTitle title={props.titleValue} onClick={() =>{

                dispatch({type:"TOGGLE-COLLAPSED"})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: TitlePropsType) {
    console.log("AccordionTitle rendered")
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    )
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendered")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}