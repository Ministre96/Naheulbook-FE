import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/models/character.model';
import { Job } from 'src/app/core/models/job.model';
import { Origin } from 'src/app/core/models/origin.model';
import { JobService } from 'src/app/core/services/job.service';

@Component({
  selector: 'app-job-choice',
  templateUrl: './job-choice.component.html',
  styleUrls: ['./job-choice.component.scss']
})
export class JobChoiceComponent {

  fgj! : FormGroup
  _jobs!: Job[]
  temp : boolean = false

  @Output() validJob = new EventEmitter<Job>();
  @Input() set jobs(jobs : Job[]) {
    this._jobs = jobs
  }

  get character(){
    return this._jobs
  }

  constructor(
    private $formBuilder : FormBuilder
  ){}


  ngOnInit(){
    this.initForm()
    this.temp = true
  }

  
  initForm(){
    this.fgj = this.$formBuilder.group({
      job : []
    })
  }

  
  selectJob(){
    this.validJob.emit(this.fgj.value.job)
  }
}
