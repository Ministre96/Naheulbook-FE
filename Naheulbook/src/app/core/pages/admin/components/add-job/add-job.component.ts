import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/core/models/job.model';
import { Origin } from 'src/app/core/models/origin.model';
import { OriginService } from 'src/app/core/services/origin.service';
import { JobService } from 'src/app/core/services/job.service';
import { MatSelectDirective } from 'src/app/shared/materialize/directives/mat-select.directive';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';
import { TypedFormModule } from 'src/app/shared/typed-form/typed-form.module';
import { FormGroupValidator } from 'src/app/shared/typed-form/validators/form-group.validator';
import { Characteristic } from 'src/app/core/models/characteristic.model';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent {
  skills : Skill[] =[]
  originRestriction : Origin[] = []
  fg! : FormGroup
  tempChar : Characteristic[] = []

  @ViewChildren(MatSelectDirective) private _matSelects: QueryList<MatSelectDirective> = new QueryList<MatSelectDirective>()

  constructor(
    private $jobService : JobService,
    private $originService : OriginService,
    private $formBuilder : FormBuilder,
    private $skillService : SkillService
  ){}

  ngOnInit(){
    this.initForm()
    this.loadItems()
    this._matSelects.forEach(select => select?.init())
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      name : [null, Validators.minLength(2)],
      description : [],
      originRestriction : [],
      heritSkills : [],
      choiceSkills : [/*FormGroupValidator.sameList() ajout condition list skill1 =/= list skill2*/],
      
    })
  }

  loadItems(){
    this.$originService.getAll().subscribe((data : Origin[]) => {
      this.originRestriction = data
    })
    this.$skillService.getAll().subscribe((data : Skill[]) => {
      this.skills = data
    })
    this._matSelects.forEach(select => select?.init())
  }

  addJob(){
    console.log(this.fg.value)
    let newJob : Job = {
      name : this.fg.value["name"],
      description : this.fg.value["description"],
      requierement : this.tempChar,//A MODIFIER 
      originRestriction : this.fg.value["originRestriction"],
      heritSkills : this.fg.value["heritSkills"],
      choiceSkills : this.fg.value["choiceSkills"]
    }
    this.$jobService.create(newJob).subscribe(() => {
      alert("Job registred")
      this.initForm()
    })
  }
}
