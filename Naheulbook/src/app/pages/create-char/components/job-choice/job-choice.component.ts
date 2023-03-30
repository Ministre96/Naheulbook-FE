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
    // this.loadList()
  }

  get character(){
    return this._jobs
  }
  constructor(
    private $formBuilder : FormBuilder
  ){}

  ngOnInit(){
    // this.loadList()
    this.initForm()
    this.temp = true
  }

  
  initForm(){
    this.fgj = this.$formBuilder.group({
      job : []
    })
  }


  // loadList(){
  //   this.$jobService.getAll().subscribe((data : Job[]) => {
  //   this.jobs = data
  //   this.restrictJob()
  // })
  // }

  // restrictJob(){
  //   for (let i = 0; i < this.jobs.length; i++) {
  //     if(this.jobs[i].bannedOrigin){
  //       for (let j = 0; j < this.jobs[i].bannedOrigin.length; j++) {
  //         if(this.jobs[i].bannedOrigin[j].name == this._origin?.name){
  //           this.jobs.splice(i, 1)
  //           i--
  //         }
  //       }
  //     }
  //   }
  // }

  selectJob(){
    this.validJob.emit(this.fgj.value.job)
  }
}
