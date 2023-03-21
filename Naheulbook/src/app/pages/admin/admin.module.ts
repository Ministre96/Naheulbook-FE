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


@NgModule({
  declarations: [
    AdminComponent,
    AddJobComponent,
    AddOriginComponent,
    AddSkillComponent,
    HeaderComponent,
    ListOriginsComponent,
    ListSkillsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterializeModule
  ]
})
export class AdminModule { }
