import React from 'react';
import './App.css';
import OnOff from "./component/OnOff/OnOff";
import UncontrolledAccordion from "./component/UncontrolledAccordion/Accordion";
import UncontrolledRating from "./component/UncontrolledRating/Rating";


function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <UncontrolledAccordion titleValue={"Menu"} />


            <UncontrolledRating  />

            {/*<Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {4}/>*/}

            <OnOff/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return (
        <h1>
            {props.title}
        </h1>
    );
}



export default App;
