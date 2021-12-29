import React from "react";

type ControlledRatingPropsType = {
    value: number
}

export function ControlledRating(props:ControlledRatingPropsType) {

if (props.value === 1){
    return (
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>)
}
if (props.value === 2){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    }
if (props.value === 3){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    }
if (props.value === 4){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>)
    }
if (props.value === 5){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>)
    }

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    }


type StarPropsType = {
    selected: boolean
}

function Star(props:StarPropsType) {
      if (props.selected===true) {
           return  <span><b>Star</b> </span>
        } else {
            return <span>Star </span>
   /*  2) Refactoring: return props.selected ? <span onClick={()=>{}}><b>Star</b> </span> : <span>Star </span>*/
/*    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ? <b>Star </b> : "Star " }</span>*/


    }}
