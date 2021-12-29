import React from "react";

export type ControlledRatingRefactoredPropsType = {
    value: 0|1|2|3|4|5
}

export function ControlledRatingRefactored(props:ControlledRatingRefactoredPropsType) {

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>)
}


type StarPropsType = {
    selected: boolean
}

function Star(props:StarPropsType) {

    return <span>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
      if (props.selected===true) {
           return  <span><b>Star</b> </span>
        } else {
            return <span>Star </span>
   /*  2) Refactoring: return props.selected ? <span onClick={()=>{}}><b>Star</b> </span> : <span>Star </span>*/
/*    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ? <b>Star </b> : "Star " }</span>*/


    }}
