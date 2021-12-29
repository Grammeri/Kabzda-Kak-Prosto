import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UncontrolledRatingWithUseStateInAppPropsType = {
    value: RatingValueType
    onClick: (value:RatingValueType) => void
}

export function UncontrolledRatingWithUseStateInApp(props: UncontrolledRatingWithUseStateInAppPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>)
}

type StarPropsType = {
    selected:boolean
    value: RatingValueType
    onClick: (value:RatingValueType) => void
}

function Star(props: StarPropsType) {
    /*  1) version:  if (props.selected===true) {
           return  <span onClick={()=>{}}><b>Star</b> </span>
        } else {
            return <span>Star </span>*/
   /*  2) Refactoring: return props.selected ? <span onClick={()=>{}}><b>Star</b> </span> : <span>Star </span>*/
    return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>Star </b> : "Star " }</span>


    }
