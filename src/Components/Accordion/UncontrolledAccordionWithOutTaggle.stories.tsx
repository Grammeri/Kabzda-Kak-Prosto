import React from "react";
import {UncontrolledAccordionWithOutToggle} from "./UncontrolledAccordionWithOutTaggle";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion2",
    component: UncontrolledAccordionWithOutToggle
}

const callback = action("accordion mode chagne event fired")

export const ModeChange = () => {
    return <UncontrolledAccordionWithOutToggle title={"Users"}/>
}