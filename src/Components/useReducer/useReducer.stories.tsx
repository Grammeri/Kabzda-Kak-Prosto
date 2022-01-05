import React from "react";
import {action} from "@storybook/addon-actions";
import {AccordionForReduer} from "./useReducer";

export default {
    title: "SelectReducer",
    component: AccordionForReduer
}

const callback = action("accordion mode chagne event fired")

export const ModeChange = () => {
    return <AccordionForReduer titleValue={"Users"} collapsed={false} onChange={callback}/>
}