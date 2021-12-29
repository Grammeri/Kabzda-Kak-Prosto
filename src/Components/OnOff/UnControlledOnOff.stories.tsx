import React from "react";
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {findAllByDisplayValue} from "@testing-library/react";

export default {
    title: "UncontrolledOnOff",
    component: typeof UnControlledOnOff,
}
/*const Template:Story<UnControlledOnOff> = (arg:ControlledOnOffPropsType) => <ControlledOnOff {...arg}/>

export const OnMode2 = Template.bind({})
OnMode2.args = {
    on: true,
    onChange: x => x
}*/

const callback = action("on or off clicked")

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when chagne defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={"yo"}/>

