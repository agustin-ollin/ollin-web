import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BubblesBackgroundComponent } from './componentes/bubbles-background/bubbles-background.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BubblesBackgroundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
