import {reducer, StateType} from "./separateReducer";

test ("collapsed should be true", ()=>{

    //1.Data
    const state:StateType ={
        collapsed:false
    }
    //2.Action
    const newState = reducer(state, {type:"TOGGLE-COLLAPSED"})
    //3.Expectation


    expect(newState.collapsed).toBe(true)
})

test ("collapsed should be false", ()=>{

    //1.Data
    const state:StateType ={
        collapsed:true
    }
    //2.Action
    const newState = reducer(state, {type:"TOGGLE-COLLAPSED"})
    //3.Expectation


    expect(newState.collapsed).toBe(false)
})

test ("reducer should throw error due to incorrect action type", ()=> {

    //1.Data
    const state: StateType = {
        collapsed: true
    }
    //2.Action
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError();
})



