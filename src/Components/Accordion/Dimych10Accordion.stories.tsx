import React, {useState} from "react";
import {AccordionPropsType, ControlledAccordionRefactored} from "./Accordion.Dimych10";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: "Accordion",
    component: ControlledAccordionRefactored,
    }

const callback = action("accordion mode chagne event fired")

const Template:Story<AccordionPropsType> = (args:AccordionPropsType) => <ControlledAccordionRefactored {...args}/>

const callbackProps = {
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,
    items:[]
}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    ...callbackProps,
    title: "Users",
    collapsed: false,
    items:["Dimych", "Valera", "Artem", "Viktor"]
}

export const ModeChange: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <ControlledAccordionRefactored  {...args}
                                           collapsed={value}
                                           onChange={() => setValue(!value)}/>
}
ModeChange.args = {
    title: "Users",
    items: [
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Viktor", value: 5},
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}