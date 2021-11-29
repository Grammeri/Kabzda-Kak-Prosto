import React from 'react';
import './App.css';
import {Rating} from "./component/Rating/Rating";
import Accordion from "./component/Accordion/Accordion";
import OnOff from "./component/OnOff/OnOff";


function App() {
    console.log("App rendering")
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed = {false}/>

            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {4}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
{/*            <OnOff on={false}/>
            <OnOff on={true}/>*/}

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
