import React from "react";

export type AccordionPropsType = {
    title:string
    collapsed:boolean
    onChange:()=>void
}

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <Title title={props.title}
            onChange={props.onChange}
            />
            {!props.collapsed && <Body/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onChange:()=>void
}

function Title(props: TitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    )
}

function Body() {
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