import React from "react";

type AccordionPropsType = {
    title:string
    collapsed:boolean
}

export function ControlledAccordion(props: AccordionPropsType) {
    if (props.collapsed === true){
    return (
        <div>
            <Title title={props.title}/>
        </div>
    )
} else{
    return(
        <div>
        <Title title={props.title}/>
        <Body/>
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
}}