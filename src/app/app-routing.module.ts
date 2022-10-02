import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "./componentes/landing-page/landing-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
