import React, {ChangeEvent, useState} from "react";


export default {
    title:"Controlled input 1"
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("3333")
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value) //if commented nothing will be displayed in the input
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {

        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}