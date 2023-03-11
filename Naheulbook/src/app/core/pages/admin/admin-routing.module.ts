import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddOriginComponent } from './components/add-origin/add-origin.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';

const routes: Routes = [
  {path : '', component : AdminComponent, children : [
    // {path : 'createJob', component : AddJobComponent},
    // {path: 'createOrigin', component : AddOriginComponent},
    // {path : 'createSkill', component : AddSkillComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
