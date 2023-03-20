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
const routes: Routes = [
  {path:"users",component:UsersComponent},
  {path: "panel",component:PanelComponent},
  {path:"login",component:LogiinComponent},
  {path:"responsable",component:GererResponsableComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"journal",component:JournalComponent},
  {path:"mc",component:MotsclesComponent},
  {path:"serveur",component:ServeursComponent},
  {path:"si",component:GererSIComponent},
  {path:"logfile",component:FilelogComponent},







  {path:"**",redirectTo:"users"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
