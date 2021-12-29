import React, {useState} from "react";
import {AccordionPropsType, ControlledAccordionRefactored} from "./Accordion.Dimych10";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const EventsCategory = {
    table: {
        category: "Events"
    }
}

const ColorsCategory = {
    table: {
        category: "Colors"
    }
}

export default {
    title: "components/Accordion",
    component: ControlledAccordionRefactored,
    argType: {
        color: {
            control: "color",
            ...ColorsCategory
        },
        onChange: {
            ...EventsCategory
        }
    }
}

const callback = action("accordion mode chagne event fired")
const onClickCallback = action("an item was clicked")

const Template:Story<AccordionPropsType> = (args:AccordionPropsType) => <ControlledAccordionRefactored {...args}/>

const callbackProps = {
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,

}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    ...callbackProps,
    title: "Users",
    collapsed: false,

}

export const ModeChange:Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <ControlledAccordionRefactored  {...args} collapsed={value}
                                           onChange={()=>{setValue(!value)}}/>
}
    ModeChange.args = {
        title:"Users",
}