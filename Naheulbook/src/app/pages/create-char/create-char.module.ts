import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharRoutingModule } from './create-char-routing.module';
import { RollComponent } from './components/roll/roll.component';
import { CreateComponent } from './components/create/create.component';
import { OriginChoiceComponent } from './components/origin-choice/origin-choice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobChoiceComponent } from './components/job-choice/job-choice.component';
import { SkillsChoiceComponent } from './components/skills-choice/skills-choice.component';


@NgModule({
  declarations: [
    RollComponent, 
    CreateComponent, 
    OriginChoiceComponent, JobChoiceComponent, SkillsChoiceComponent
  ],

  imports: [
    CommonModule,
    CreateCharRoutingModule, 
    ReactiveFormsModule,
    FormsModule

  ]
})

export class CreateCharModule { }
