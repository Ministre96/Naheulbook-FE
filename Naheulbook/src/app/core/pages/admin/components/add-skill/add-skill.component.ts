import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent {
  fg! : FormGroup

  constructor(
    private $formBuilder : FormBuilder,
    private $skillService : SkillService
  ){

  }

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      name : [null, Validators.minLength(2)],
      description : [null, Validators.minLength(2)]
    })
  }

  addSkill(){
    console.log(this.fg.value)
    let newSkill : Skill = {
      name : this.fg.value["name"],
      description : this.fg.value["description"]
    }
    this.$skillService.create(newSkill).subscribe(() => {
      alert("Skill registred")
      this.initForm()
    })
  }
  
}
