import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name : "counter",
    initialState : {
        counterVal : 0
    },
    reducers : {
        incerement : (state)=>{
            state.counterVal++;
        },
        decrement : (state)=>{
            state.counterVal--;
        },
        add : (state, action)=>{
            state.counterVal += Number(action.payload);
        },
        subtract : (state, action)=>{
            state.counterVal -= Number(action.payload);
            
        }
    }
});


const counterStore = configureStore({reducer : {
    counter : counterSlice.reducer
}});

export const counterActions = counterSlice.actions
export default counterStore;

/*
const INITIAL_vALUE = {
    counter : 5
}
const counterReducer = (store = INITIAL_vALUE, action)=>{
    if(action.type === "INCREMENT"){
        return {counter: store.counter + 1}
    }else if(action.type === "DECREMENT"){
        return {counter: store.counter - 1}
    }else if(action.type === "ADD"){
        return {counter: store.counter + Number(action.payload.num)}
    }else if(action.type === "SUBTRACT"){
        return {counter: store.counter - Number(action.payload.num)}
    }

    return store;
}
*/