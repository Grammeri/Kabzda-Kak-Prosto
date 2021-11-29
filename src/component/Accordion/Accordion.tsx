import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    }

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}/> {/*Show all the time*/}
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTytlePropsType = {
    title: string
}

function  AccordionTitle(props: AccordionTytlePropsType) {
    console.log("Accordion rendering")
        return (
        <h3>
            {props.title}
        </h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;
