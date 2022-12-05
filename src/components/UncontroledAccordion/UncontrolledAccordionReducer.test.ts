import {reducer, StateType} from "./UncontroledAccordion";

test('reducer change value to "true" ', () => {
    const state:StateType = {
        collapsed:false
    }

   const newState = reducer(state,{type: 'CHANGE_COLLAPSED'})


    expect(newState.collapsed).toBe(true)
})

test('reducer change value to "false" ', () => {
    const state:StateType = {
        collapsed:true
    }

    const newState = reducer(state,{type: 'CHANGE_COLLAPSED'})


    expect(newState.collapsed).toBe(false)
})

