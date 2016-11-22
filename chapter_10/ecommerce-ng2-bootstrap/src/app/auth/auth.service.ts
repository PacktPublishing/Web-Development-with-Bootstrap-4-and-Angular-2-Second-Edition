/*
 * Angular Imports
 */
import { Injectable } from "@angular/core";
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from "angularfire2";

@Injectable()
export class AuthService {
    private authState: FirebaseAuthState = null;

constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
        this.authState = state;
    });
}

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get uid(): string {
        return this.authenticated ? this.authState.uid : "";
    }

    signIn(email: string, password: string): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login({
            email: email,
            password: password
        }, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    signOut(): void {
        this.auth$.logout();
    }
}
