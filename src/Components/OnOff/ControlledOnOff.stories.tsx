import React, {useState} from "react";
import {ControlledOnOff, ControlledOnOffPropsType} from "./ControlledOnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: "ControlledOnOff",
    component: typeof ControlledOnOff,
}
const Template:Story<ControlledOnOffPropsType> = (arg:ControlledOnOffPropsType) => <ControlledOnOff {...arg}/>

export const OnMode2 = Template.bind({})
OnMode2.args = {
    on: true,
    onChange: x => x
}

const callback = action("on or off clicked")

export const OnMode = () => <ControlledOnOff on = {true} onChange={callback}/>
export const OffMode = () => <ControlledOnOff on = {false} onChange={callback}/>

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <ControlledOnOff on={value} onChange={setValue}/>
}