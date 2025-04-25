import { createSelector } from "@ngrx/store";
import { loginState } from "../interfaces/loginState";

export const selectLoginState = (state: loginState) => state

export const selectLogin = createSelector(
    selectLoginState,
    (state) => state.loggedUser
)
export const selectToken = createSelector(
    selectLoginState,
    (state) => state.token
)

export const selectError = createSelector(
    selectLoginState,
    (state) => state.error
)

export const selectIsLoading = createSelector(
    selectLoginState,
    (state) => state.isLoading
)