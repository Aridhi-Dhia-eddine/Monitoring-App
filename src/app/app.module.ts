import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GererSIComponent } from './gerer-si/gerer-si.component';
import { GererResponsableComponent } from './gerer-responsable/gerer-responsable.component';
import { PanelComponent } from './panel/panel.component';
import { UsersComponent } from './users/users.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilelogComponent } from './filelog/filelog.component';
import { LogiinComponent } from './logiin/logiin.component';
import { MotsclesComponent } from './motscles/motscles.component';
import { ServeursComponent } from './serveurs/serveurs.component';


@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    NavbarComponent,
    GererSIComponent,
    GererResponsableComponent,
    PanelComponent,
    UsersComponent,
    DashboardComponent,
    FilelogComponent,
    LogiinComponent,
    MotsclesComponent,
    ServeursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
