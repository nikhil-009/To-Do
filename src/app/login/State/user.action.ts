import { createAction, props } from "@ngrx/store";

export const userLogin=createAction('userLogin',props<{data:number}>())
export const userLogout=createAction('userLogout')

