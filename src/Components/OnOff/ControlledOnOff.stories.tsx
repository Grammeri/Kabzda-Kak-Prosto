import React, {useState} from "react";
import {ControlledOnOff, ControlledOnOffPropsType} from "./ControlledOnOff";
import {Story} from "@storybook/react";

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

export const OnMode = () => <ControlledOnOff on = {true} onChange={x=>x}/>
export const OffMode = () => <ControlledOnOff on = {false} onChange={x=>x}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <ControlledOnOff on={value} onChange={setValue}/>
}