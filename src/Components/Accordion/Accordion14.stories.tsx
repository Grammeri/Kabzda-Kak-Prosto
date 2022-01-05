import React, {useState} from "react";
import {Accordion14} from "./Accordion14";
import {action} from "@storybook/addon-actions";

export default {
    title:"Accordion14",
    component:Accordion14
}

const callback = action ("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () =><Accordion14 titleValue={"Menu"}
                                                   collapsed={true}
                                                   onChange={callback}
                                                   items={[]}
                                                   onClick={onClickCallback}
                                                    />

export const UsersUncollapsedMode = () => <Accordion14 titleValue={"Menu"}
                                                       collapsed={false}
                                                       onChange={callback}
                                                       items={[{title: "Dimych", value: 1},
                                                           {title: "Valera", value: 2},
                                                           {title: "Artem", value: 3},
                                                           {title: "Viktor", value: 4}]}
                                                       onClick={onClickCallback}
                                                        />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion14 titleValue={"Users"}
                        collapsed={value}
                        onChange={() => setValue(!value)}
                        items={[{title: "Dimych", value: 1},
                            {title: "Valera", value: 2},
                            {title: "Artem", value: 3},
                            {title: "Viktor", value: 4}]}
                        onClick={(value)=>{alert(`user with ID ${value} must be happy!`)}}
    />
}