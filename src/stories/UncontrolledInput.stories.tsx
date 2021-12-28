import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title:"Uncontrolled input 2"
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={"it-inkubator"}/>

export function TrackingUncontrolledInput () {
    const [value, setValue] = useState("let's get started")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return <><input onChange={onChange}/>{value}</>
}

export const GetValueFromUncontrolledInputByButton1 = () => {
    const [value, setValue] = useState("")

    return<><input/><button onClick={()=>{setValue("yo")}}>Save
        </button> - actual value: {value}</>
}

export const GetValueFromUncontrolledInputByButton2 = () => {
    const [value, setValue] = useState("")

    return<><input id={"inputId"}/><button onClick={(e)=> {
        const el=document.getElementById("imputId") as HTMLInputElement

        setValue(el.value)
    }}>Save</button> - actual value: {value}</>
} //Нарушение принципов работы с React


export const GetValueFromUncontrolledInputByUsingRefs = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}</>
}




