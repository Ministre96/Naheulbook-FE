import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobResolverResolver } from 'src/app/shared/resolver/job-resolver.resolver';
import { OriginResolverResolver } from 'src/app/shared/resolver/origin-resolver.resolver';
import { AdminComponent } from './admin.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ListOriginsComponent } from './components/list-origins/list-origins.component';
import { ListSkillsComponent } from './components/list-skills/list-skills.component';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { UpdateOriginComponent } from './components/update-origin/update-origin.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { SkillResolver } from './skill-resolver.resolver';


const routes: Routes = [
  {path : '', component : AdminComponent, children : [
    {path : '', component: AddAdminComponent },
    {path : 'modify/jobs', component : ListJobsComponent},
    {path : 'modify/origins', component : ListOriginsComponent},
    {path : 'modify/skills', component : ListSkillsComponent},
    {path : 'modify/skill/:id', resolve : {currentSkill : SkillResolver}, component: UpdateSkillComponent},
    {path : 'modify/origin/:id', resolve : {currentOrigin : OriginResolverResolver}, component : UpdateOriginComponent},
    {path : 'modify/job/:id', resolve : {currentJob : JobResolverResolver}, component : UpdateJobComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
