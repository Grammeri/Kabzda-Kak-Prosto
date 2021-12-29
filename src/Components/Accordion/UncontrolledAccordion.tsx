import React, {useState} from "react";

type AccordionPropsType = {
title:string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

const [collapsed,setCollapsed] = useState(false)
    return (
        <div>
            <Title title={props.title}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <Body/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
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