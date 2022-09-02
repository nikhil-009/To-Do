import { userReducer } from "../login/State/user.reducer";
import { UserState } from "../login/State/user.state";

export interface appState {
    userlogin:UserState
    
}
export const appReducer={
    userlogin:userReducer
    
}