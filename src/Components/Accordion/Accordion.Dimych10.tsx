import React from "react";

export type AccordionPropsType = {
    title:string
    collapsed:boolean
 /** *Provide Description*/
    onChange: ()=>void
    /**
     * Color of header
     */
    color?:string
}

export function ControlledAccordionRefactored(props: AccordionPropsType) {
    return (
        <div>
            <Title title={props.title} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <Body/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onChange: () => void
    color?:string
}

function Title(props: TitlePropsType) {
    return (
        <div>
            <h3
                style={{color: props.color ? props.color : "black"}}
                onClick={(e)=>props.onChange()}>---{props.title}</h3>
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