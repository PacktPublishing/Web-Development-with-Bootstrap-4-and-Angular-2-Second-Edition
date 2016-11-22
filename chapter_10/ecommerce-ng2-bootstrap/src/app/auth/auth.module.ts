/*
 * Angular Imports
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
/*
 * Components
 */
import { SignInComponent } from "./sign-in.component";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard, AuthService]
})
export class AuthModule { }

export { AuthGuard, AuthService };
