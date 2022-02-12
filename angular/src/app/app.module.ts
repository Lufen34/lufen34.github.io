import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TechStackComponent } from './component/tech-stack/tech-stack.component';
import { VisualTerminalsComponent } from './component/tech-stack/visual-terminals/visual-terminals.component';
import { TerminalComponent } from './component/tech-stack/visual-terminals/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TechStackComponent,
    VisualTerminalsComponent,
    TerminalComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
