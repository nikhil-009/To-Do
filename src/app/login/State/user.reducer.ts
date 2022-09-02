import { createReducer, on } from "@ngrx/store";
import { userLogin, userLogout } from "./user.action";
import { initialState } from "./user.state";

export const userReducer = createReducer(
    initialState,
    on(userLogin,(state,action) => {
        console.log("id:",action);
        //debugger;
        return {
            ...state,
            userId:action.data
        };
        }),
    on(userLogout,(state)=>{
        return {
            ...state,
            userId:0
        };
        }))