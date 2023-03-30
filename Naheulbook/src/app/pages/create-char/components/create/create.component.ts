import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/models/character.model';
import { Characteristic } from 'src/app/core/models/characteristic.model';
import { Job } from 'src/app/core/models/job.model';
import { Origin } from 'src/app/core/models/origin.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  fg! : FormGroup
  char : Character = {}
  tempCharOr : Character = {}
  tempCharJob : Character = {}

  constructor(
    private $formBuilder : FormBuilder
  ){

  }
  validRoll( newRoll : Character){
    this.char = {...this.char, characteristics : undefined}
    this.char = {...this.char,
      characteristics: newRoll.characteristics,
      fate : newRoll.fate,
      gold : newRoll.gold,
      origin: undefined,
      job: undefined
  }
}

  validOrigin( newOrigin : Origin){
    this.char = {...this.char, origin: newOrigin, job: undefined}
  }

  validJob(newJob : Job){
    this.char = {...this.char, job: newJob}
  }


}
