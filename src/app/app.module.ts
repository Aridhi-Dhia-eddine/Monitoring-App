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
import { ReinitialisationMDPuserSmComponent } from './reinitialisation-mdpuser-sm/reinitialisation-mdpuser-sm.component';
import { ModifierMDPComponent } from './modifier-mdp/modifier-mdp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JournComponent } from './journ/journ.component';
import { NavComponent } from './nav/nav.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewComponent } from './view/view.component';
import { StatisticsComponent } from './statistics/statistics.component';

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
    ServeursComponent,
    ModifierMDPComponent,
    ReinitialisationMDPuserSmComponent,
    JournComponent,
    NavComponent,
    ProfilComponent,
    ViewComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
