import { createReducer, on } from "@ngrx/store";
import { failureLogin, submitCredentials, successfulLogin } from "./login.actions";
import { loginState } from "../interfaces/loginState";

let initialState : loginState = {
    loggedUser: {email: '', password: ''},
    isLoading: false,
    token: '',
    error: ''
}

export const loginReducer = createReducer(
    initialState,
    on(submitCredentials, (state, action) => ({...state, loggedUser: {email: action.email, password: action.password},  isLoading: true})),
    on(successfulLogin, (state, {token}) => ({...state, token, isLoading: false})),
    on(failureLogin, (state, {error}) => ({...state, error, isLoading: false}))
)