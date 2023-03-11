import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Characteristic } from 'src/app/core/models/characteristic.model';
import { Origin } from 'src/app/core/models/origin.model';
import { Skill } from 'src/app/core/models/skill.model';
import { OriginService } from 'src/app/core/services/origin.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { MatSelectDirective } from 'src/app/shared/materialize/directives/mat-select.directive';

@Component({
  selector: 'app-add-origin',
  templateUrl: './add-origin.component.html',
  styleUrls: ['./add-origin.component.scss']
})
export class AddOriginComponent {

  skills : Skill[] =[]
  fg! : FormGroup
  tempChar : Characteristic[] = []
  
  @ViewChildren(MatSelectDirective) private _matSelects: QueryList<MatSelectDirective> = new QueryList<MatSelectDirective>()

  constructor(
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
      heritSkills : [],
      choiceSkills : [/*FormGroupValidator.sameList() ajout condition list skill1 =/= list skill2*/]
    })
  }

  loadItems(){
    this.$skillService.getAll().subscribe((data : Skill[]) => {
      this.skills = data
    })
    this._matSelects.forEach(select => select?.init())
  }

  addOrigin(){
    console.log(this.fg.value)
    let newOrigin : Origin = {
      name : this.fg.value["name"],
      description : this.fg.value["description"],
      requierement : this.tempChar,//A MODIFIER 
      heritSkills : this.fg.value["heritSkills"],
      choiceSkills : this.fg.value["choiceSkills"]
    }
    this.$originService.create(newOrigin).subscribe(() => {
      alert("Job registred")
      this.initForm()
    })
  }

}
