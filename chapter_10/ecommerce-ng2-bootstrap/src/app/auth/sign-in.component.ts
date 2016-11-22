/*
 * Angular Imports
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";

/*
 * Components
 */
import { AuthService } from "./auth.service";

@Component({
    selector: "db-signin",
    template: require("./sign-in.component.html"),
    styles: [require("./auth.scss")]
})
export class SignInComponent {
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;
    error = "";

    constructor(private auth: AuthService, private router: Router, fb: FormBuilder) {
        this.form = fb.group({
            "email": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            "password": ["", Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.form.controls["email"];
        this.password = this.form.controls["password"];
    }

    onSubmit(values: any): void {
        this.submitted = true;
        this.auth.signIn(values.email, values.password)
            .then(() => this.postSignIn())
            .catch((error) => {
                this.error = "Username or password is incorrect";
                this.submitted = false;
            });
    }

    private postSignIn(): void {
        this.router.navigate(["/welcome"]);
    }
}
