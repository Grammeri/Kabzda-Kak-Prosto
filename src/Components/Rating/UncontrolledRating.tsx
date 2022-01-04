import React, {useState} from "react";

export type RatingValueType = 0|1|2|3|4|5

export type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange?:(value:RatingValueType) =>void

   }

export function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue]=useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>

        </div>)
}

export type StarPropsType = {
    selected:boolean
    setValue:(value:RatingValueType)=>void

}

function Star(props:  StarPropsType) {
    /*  1) version:  if (props.selected===true) {
           return  <span onClick={()=>{}}><b>Star</b> </span>
        } else {
            return <span>Star </span>*/
   /*  2) Refactoring: return props.selected ? <span onClick={()=>{}}><b>Star</b> </span> : <span>Star </span>*/
    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ? <b>Star </b> : "Star " }</span>


    }
