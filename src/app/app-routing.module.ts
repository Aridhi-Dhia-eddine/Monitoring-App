import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PanelComponent } from './panel/panel.component';
import { LogiinComponent } from './logiin/logiin.component';
import { GererResponsableComponent } from './gerer-responsable/gerer-responsable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { MotsclesComponent } from './motscles/motscles.component';
import { ServeursComponent } from './serveurs/serveurs.component';
import { GererSIComponent } from './gerer-si/gerer-si.component';
import { FilelogComponent } from './filelog/filelog.component';
import { ReinitialisationMDPuserSmComponent } from './reinitialisation-mdpuser-sm/reinitialisation-mdpuser-sm.component';
import { ModifierMDPComponent } from './modifier-mdp/modifier-mdp.component';
import { JournComponent } from './journ/journ.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewComponent } from './view/view.component';
import { StatisticsComponent } from './statistics/statistics.component';
const routes: Routes = [
  {path:"users/:matricule",component:UsersComponent},
  {path: "panel/:matricule",component:PanelComponent},
  {path:"login",component:LogiinComponent},
  {path:"responsable/:matricule",component:GererResponsableComponent},
  {path:"dashboard/:matricule",component:DashboardComponent},
  {path:"journal/:matricule",component:JournalComponent},
  {path:"mc/:matriculec",component:MotsclesComponent},
  {path:"serveur/:matricule",component:ServeursComponent},
  {path:"si/:matricule",component:GererSIComponent},
  {path:"logfile/:matricule",component:FilelogComponent},
  {path:"renitialiser",component:ReinitialisationMDPuserSmComponent},
  {path:"modifier/:mail",component:ModifierMDPComponent},
  {path:"journ/:matricule",component:JournComponent},
  {path:"profil/:matricule",component:ProfilComponent},
  {path:"view/:id",component:ViewComponent},
  {path:"staistics",component:StatisticsComponent},




  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
