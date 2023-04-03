import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/core/models/character.model';
import { Characteristic } from 'src/app/core/models/characteristic.model';
import { Job } from 'src/app/core/models/job.model';
import { Origin } from 'src/app/core/models/origin.model';
import { CharacterService } from 'src/app/core/services/character.service';
import { JobService } from 'src/app/core/services/job.service';
import { OriginService } from 'src/app/core/services/origin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  fg! : FormGroup
  char : Character = {}
  origins! : Origin[]
  jobs! : Job[]

  constructor(
    private $formBuilder : FormBuilder,
    private $jobService : JobService,
    private $characterService : CharacterService,
    private $originService : OriginService
  ){
  }

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      firstname : [null, Validators.minLength(2)],
      lastname : [null, Validators.minLength(2)]
    })
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
  this.loadOrigins()
}

loadOrigins(){
  this.$originService.getAll().subscribe((data : Origin[]) => 
  this.origins = data)
  // this.restrictOrigin()
}

  validOrigin( newOrigin : Origin){
    this.char = {...this.char, origin: newOrigin, job: undefined}
    this.loadJobs()
  }

  loadJobs(){
    this.$jobService.getAll().subscribe((data : Job[]) => {
    this.jobs = data
    this.restrictJob()
  })
  }

  restrictJob(){
    for (let i = 0; i < this.jobs.length; i++) {
      if(this.jobs[i].bannedOrigin){
        for (let j = 0; j < this.jobs[i].bannedOrigin.length; j++) {
          if(this.jobs[i].bannedOrigin[j].name == this.char.origin?.name){
            this.jobs.splice(i, 1)
            i--
          }
        }
      }
    }
  }

  validJob(newJob : Job){
    this.char = {...this.char, job: newJob}
  }

  validSkills(character : Character){
    this.char = {...this.char, skills: character.skills}
  }

  addCharacter(){
    this.char = {...this.char, 
      firstname: this.fg.value["firstname"],
      lastname: this.fg.value["lastname"]
    }
    console.log(this.char)
    this.$characterService.create(this.char).subscribe(() => {
      alert("Character created")
      this.char = {}
    })
  }
}
