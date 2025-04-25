import { createAction, props } from "@ngrx/store";
import { Login } from "../interfaces/login";

export const submitCredentials = createAction(
    '[Login] SubmitCredentials',
    props<Login>()
)

export const successfulLogin = createAction(
    '[Login] SuccessfulLogin',
    props<{token: string}>()
)

export const failureLogin = createAction(
    '[Login] FailureLogin',
    props<{error: string}>()
)