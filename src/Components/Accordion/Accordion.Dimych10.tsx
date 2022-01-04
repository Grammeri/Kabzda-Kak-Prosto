import React from "react";

export type ItemType = {
    value:any
    title:string
}

export type AccordionPropsType = {
    title:string
    collapsed:boolean
 /** *Provide Description*/
    onChange: ()=>void
    /**
     * Color of header
     */
    color?:string
    items:ItemType[]
    onClick: (value:any)=>void
}

export function ControlledAccordionRefactored(props: AccordionPropsType) {
    return (
        <div>
            <Title title={props.title}
                   onChange={props.onChange}
                   color={props.color}/>
            {!props.collapsed && <Body items={items}/>}
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

type BodyPropsType = {
    items:string[]
}

function Body(props: BodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map(i=> <li>{i}</li>)}
            </ul>
        </div>
    )
}