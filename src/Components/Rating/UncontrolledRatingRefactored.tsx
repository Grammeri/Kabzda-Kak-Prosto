import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UncontrolledRatingRefactoredPropsType = {
    setValue: (value:RatingValueType)=>void
    value:RatingValueType
}

export function UncontrolledRatingRefactored(props: UncontrolledRatingRefactoredPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} setValue={()=>{props.setValue(1)}} />
            <Star selected={props.value > 1} setValue={()=>{props.setValue(2)}} />
            <Star selected={props.value > 2} setValue={()=>{props.setValue(3)}} />
            <Star selected={props.value > 3} setValue={()=>{props.setValue(4)}} />
            <Star selected={props.value > 4} setValue={()=>{props.setValue(5)}} />
        </div>)
}

type StarPropsType = {
    selected:boolean
    setValue: (value:RatingValueType)=>void
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.setValue(1)}}>
        {props.selected ? <b>Star </b> : "Star " }</span>
}
