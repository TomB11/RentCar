import { Actions, createEffect, ofType } from "@ngrx/effects";
import { submitCredentials } from "./login.actions";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { AuthentificationService } from "../services/authentification.service";
import { Store } from "@ngrx/store";

export class LoginEffects {
    saveCredentials$ = createEffect(() => this.actions$.pipe(
        ofType(submitCredentials),
        tap((action: any) => {
            console.log('action', action, action.value)
            let shouldHaveAccessEmail = localStorage.getItem('email') ? localStorage.getItem('email') : ''
            let rightPassword = localStorage.getItem('pssw') ? localStorage.getItem('pssw') : ''
        })
    ), {dispatch: false})

    constructor(
        private actions$: Actions,
        public authService: AuthentificationService,
        public store: Store
    ){}
}