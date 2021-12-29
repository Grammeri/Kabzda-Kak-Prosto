import React, {useState} from "react";
import {ControlledRatingRefactored, ControlledRatingRefactoredPropsType} from "./ControlledRatingRefactored";

export default {
    title: "ControlledRating",
    component: ControlledRatingRefactored
}

export const EmptyRating = () => <ControlledRatingRefactored value={0} onClick={x=>x}/>
export const Rating1 = () => <ControlledRatingRefactored value={1} onClick={x=>x}/>
export const Rating2 = () => <ControlledRatingRefactored value={2} onClick={x=>x}/>
export const Rating3 = () => <ControlledRatingRefactored value={3} onClick={x=>x}/>
export const Rating4 = () => <ControlledRatingRefactored value={4} onClick={x=>x}/>
export const Rating5 = () => <ControlledRatingRefactored value={5} onClick={x=>x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<0|1|2|3|4|5>(3)
    return <ControlledRatingRefactored value={rating} onClick={setRating}/>
}