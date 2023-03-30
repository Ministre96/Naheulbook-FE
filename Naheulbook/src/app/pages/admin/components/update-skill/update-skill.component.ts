import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';
import { SkillAdminService } from '../../services/skill-admin.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent {
  
  skill! : Skill
  fg! : FormGroup


  constructor(
    private $formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private $skillAdminService : SkillAdminService,
    private router : Router){
      route.data.subscribe((data : any) => {
        this.skill = data.currentSkill
        console.log(this.skill)
      })
  }

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      name : [ this.skill.name, Validators.minLength(2)],
      description : [this.skill.description, Validators.minLength(2)]
    })
  }

  updateSkill(){
    let newSkill : Skill = {
      id: this.skill.id,
      name : this.fg.value["name"],
      description : this.fg.value["description"]
    }
    this.$skillAdminService.update(newSkill).subscribe(() => {
      alert("Skill updated")
      this.router.navigate(['admin/modify/skills'])
    })
  }



}
