import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOriginComponent } from './components/add-origin/add-origin.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { MaterializeModule } from 'src/app/shared/materialize/materialize.module';
import { TypedFormModule } from 'src/app/shared/typed-form/typed-form.module';


@NgModule({
  declarations: [
    AdminComponent,
    AddOriginComponent,
    AddJobComponent,
    AddSkillComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterializeModule,
    TypedFormModule
  ]
})
export class AdminModule { }
