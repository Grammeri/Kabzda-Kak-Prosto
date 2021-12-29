import React, {useState} from "react";

type AccordionPropsType = {
title:string
}

export function UncontrolledAccordionWithOutToggle(props: AccordionPropsType) {

const [collapsed,setCollapsed] = useState(false)
    return (
        <div>
            <Title title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
           {/* <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {!collapsed && <Body/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onClick:()=>void
}

function Title(props: TitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    )
}

function Body(props: any) {
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