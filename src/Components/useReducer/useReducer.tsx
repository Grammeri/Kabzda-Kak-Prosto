import React, {useReducer} from "react";

type AccordionPropsType = {
    title:string
}

type ActionType = {
    type:string
}

const reducer = (state: boolean, action: ActionType) => {
    debugger
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    //const [collapsed,setCollapsed] = useState(false)
    const [collapsed,dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/* <AccordionTitle={props.titleVAlue} onClick={()=>{(}setCollapsed(!collapsed)}}/>}*/}
            <AccordionTitle title={props.title} onClick={() => {
                debugger
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: TitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionBody(props: any) {
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