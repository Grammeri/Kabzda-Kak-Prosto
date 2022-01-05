type ActionType = {
    type:string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
/*            const stateCopy = {...state}
            stateCopy.collapsed = !state.collapsed*/


/*            const stateCopy = {
                ...state,collapsed: !state.collapsed
            }*/
            return {...state,collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type")
    }
    return state
}