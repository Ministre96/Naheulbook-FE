import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'src/app/shared/materialize/materialize.module';
import { HeaderComponent } from './header/header.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddOriginComponent } from './components/add-origin/add-origin.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ListOriginsComponent } from './components/list-origins/list-origins.component';
import { ListSkillsComponent } from './components/list-skills/list-skills.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { SkillResolver } from './skill-resolver.resolver';
import { UpdateOriginComponent } from './components/update-origin/update-origin.component';
import { OriginResolverResolver } from 'src/app/shared/resolver/origin-resolver.resolver';
import { UpdateJobComponent } from './components/update-job/update-job.component';
import { JobResolverResolver } from 'src/app/shared/resolver/job-resolver.resolver';


@NgModule({
  declarations: [
    AdminComponent,
    AddJobComponent,
    AddOriginComponent,
    AddSkillComponent,
    HeaderComponent,
    ListJobsComponent,
    ListOriginsComponent,
    ListSkillsComponent,
    AddAdminComponent,
    UpdateSkillComponent,
    UpdateOriginComponent,
    UpdateJobComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterializeModule,
  ],
  providers: [
    SkillResolver,
    OriginResolverResolver,
    JobResolverResolver
  ]
})
export class AdminModule { }
