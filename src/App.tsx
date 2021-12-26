import React, {useState} from 'react';
import './App.css';
import {RatingValueType, UncontrolledRatingRefactored} from "./Components/UncontrolledRatingRefactored";
import {UncontrolledRating} from "./Components/UncontrolledRating";
import {AccordionPropsType, ControlledAccordion} from "./Components/ControlledAccordion";
import {ControlledOnOff} from "./Components/ControlledOnOff";
import {UnControlledOnOff} from "./Components/UnControlledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [value, setValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [switchOnB, setSwitchOnB] = useState<boolean>(false)



    return (
        <div className="App">
            <b>---Uncontrolled--- </b>
            <UncontrolledRating value={ratingValue}
                                onClick={setRatingValue}/>

            <b>---UncontrolledRefactored---</b>
            <UncontrolledRatingRefactored setValue={setValue}
                                          value={value}/>
            <b>ControlledAccordion</b>
            <ControlledAccordion title={"ControlledAccordion"}
                                 collapsed={accordionCollapsed}
                                 onChange={() => {
                                     setAccordionCollapsed(!accordionCollapsed)
                                 }}/>
            <b>---ControlledOnOff---</b>
            <ControlledOnOff on={switchOn}
                             onChange={setSwitchOn}/>

            <b>---UnControlledOnOff---</b>
            <UnControlledOnOff onChange={setSwitchOnB}/>{switchOnB.toString()}
        </div>
    );
}

export default App;

