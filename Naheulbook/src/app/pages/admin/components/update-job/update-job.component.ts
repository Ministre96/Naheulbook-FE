import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Characteristic } from 'src/app/core/models/characteristic.model';
import { Job } from 'src/app/core/models/job.model';
import { Origin } from 'src/app/core/models/origin.model';
import { Skill } from 'src/app/core/models/skill.model';
import { JobService } from 'src/app/core/services/job.service';
import { OriginService } from 'src/app/core/services/origin.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { MatSelectDirective } from 'src/app/shared/materialize/directives/mat-select.directive';
import { JobAdminService } from '../../services/job-admin.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.scss']
})
export class UpdateJobComponent {
  skills : Skill[] =[]
  bannedOrigin : Origin[] = []
  fg! : FormGroup
  job! : Job
  tempChar : Characteristic[] = []

  @ViewChildren(MatSelectDirective) private _matSelects: QueryList<MatSelectDirective> = new QueryList<MatSelectDirective>()

  constructor(
    private $jobService : JobService,
    private $originService : OriginService,
    private $jobAdminService : JobAdminService,
    private route: ActivatedRoute,
    private router : Router,
    private $formBuilder : FormBuilder,
    private $skillService : SkillService
  ){
    route.data.subscribe((data : any) => {
      this.job = data.currentJob
      console.log(this.job)
    })
  }

  ngOnInit(){
    this.initForm()
    this.loadItems()
    this._matSelects.forEach(select => select?.init())
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      name : [this.job.name, Validators.minLength(2)],
      description : [this.job.description, Validators.minLength(2)],
      bannedOrigin : [],
      heritatedSkill : [],
      skillToChoose : []
    })
  }
  
  loadItems(){
    this.$originService.getAll().subscribe((data : Origin[]) => {
      this.bannedOrigin = data
    })
    this.$skillService.getAll().subscribe((data : Skill[]) => {
      this.skills = data
    })
    this._matSelects.forEach(select => select?.init())
  }

  updateJob(){
    console.log(this.fg.value)
    let newJob : Job = {
      id : this.job.id,
      name : this.fg.value["name"],
      description : this.fg.value["description"],
      requierement : this.tempChar,//A MODIFIER 
      bannedOrigin : this.fg.value["bannedOrigin"],
      heritatedSkill : this.fg.value["heritatedSkill"],
      skillToChoose : this.fg.value["skillToChoose"]
    }
    this.$jobAdminService.update(newJob).subscribe(() => {
      M.toast({html: 'Job updated', classes: 'rounded'})
      this.router.navigate(['admin/modify/jobs'])
    })
  }
}
