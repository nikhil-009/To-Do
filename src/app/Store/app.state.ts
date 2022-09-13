import { userReducer } from "../login/State/user.reducer";
import { UserState } from "../login/State/user.state";
import { dataReducer } from "../Users/State/data.reducer";
import { DataState } from "../Users/State/data.state";

export interface appState {
    userlogin:UserState
    userDat:DataState
    
}
export const appReducer={
    userlogin:userReducer,
    userDat:dataReducer
    
}