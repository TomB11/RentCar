import { Login } from "./login";

export interface loginState {
    loggedUser: Login,
    isLoading: boolean,
    token: string,
    error: string
}