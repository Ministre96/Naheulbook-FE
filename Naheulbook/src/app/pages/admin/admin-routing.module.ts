import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ListOriginsComponent } from './components/list-origins/list-origins.component';
import { ListSkillsComponent } from './components/list-skills/list-skills.component';
const routes: Routes = [
  {path : '', component : AdminComponent, children : [
  ]},
  {path : 'modify/jobs', component : ListJobsComponent},
  {path : 'modify/origins', component : ListOriginsComponent},
  {path : 'modify/skills', component : ListSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
