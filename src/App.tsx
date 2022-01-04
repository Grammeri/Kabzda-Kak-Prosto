import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from "./Components/Accordion/ControlledAccordion";
import {UncontrolledAccordion} from "./Components/Accordion/UncontrolledAccordion";
import {ControlledRating} from "./Components/rating/ControlledRating";
import {ControlledAccordionRefactored} from "./Components/Accordion/ControlledAccordionRefactored";
import {UncontrolledRating} from "./Components/rating/UncontrolledRating";
import {ControlledRatingRefactored} from "./Components/rating/ControlledRatingRefactored";
import {UncontrolledAccordionWithOutToggle} from "./Components/Accordion/UncontrolledAccordionWithOutTaggle";
import {
    RatingValueType,
    UncontrolledRatingWithUseStateInApp
} from "./Components/rating/UncontrolledRatingWithUseStateInApp";
import {Accordion14} from "./Components/Accordion/Accordion14";

function App() {
    let[ratingValue, setRatingValue] = useState<RatingValueType>(5)
    return (
        <div className="App">
            <ControlledAccordion title={"ControlledAccordion No.1"} collapsed={false} />
            <ControlledAccordionRefactored title={"ControlledAccordion No.2 Refactored"} collapsed={true}/>
            <UncontrolledAccordion title={"Uncontrolled Accordion No.1"}/>
            <UncontrolledAccordionWithOutToggle title={"Uncontrolled Accordion Without Toggle"}/>

            <b>Controlled Rating</b>
            <ControlledRating value={5} />

            <b>Uncontrolled Rating</b>
            <UncontrolledRating />

            <b>Uncontrolled Rating with useState in APP</b>
            <UncontrolledRatingWithUseStateInApp value={ratingValue}
            onClick={setRatingValue}/>

            <b>Refactored Controlled Rating</b>
            <ControlledRatingRefactored value={1} />
            <ControlledRatingRefactored value={2} />
            <ControlledRatingRefactored value={3} />
            <ControlledRatingRefactored value={4} />
            <ControlledRatingRefactored value={5} />

            <b>ON/OFF</b>
            <OnOff/>


        </div>
    );
}

type OnOffPropsType = {

}

function OnOff (props:OnOffPropsType){
    const [on, setOn] = useState(false)

    const onStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: on ? "green" : "white",
        padding:"2px",
        display:"inline-block",
        marginLeft: "10px",
        border:"1px solid black"
    }
    const offStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: on ? "white" : "red",
        padding:"2px",
        display:"inline-block",
        marginLeft: "10px",
        border:"1px solid black"
    }
    const bulbStyle = {
        width: "50px",
        height: "50px",
        border:"1px solid black",
        borderRadius:"30px",
        display:"inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    }


    return(
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
            <div style={bulbStyle}></div>

        </div>
    )
}

export default App;
