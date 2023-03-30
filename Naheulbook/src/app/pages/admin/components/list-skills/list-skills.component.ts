import { Component } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';
import { SkillAdminService } from '../../services/skill-admin.service';

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.scss']
})
export class ListSkillsComponent {
  skills! : Skill[]

  constructor(
    private $skillService : SkillService,
    private $skillAdminService : SkillAdminService
    ) {}

  ngOnInit(){
    this.loadList()
  }

  loadList(){
    this.$skillService.getAll().subscribe((data : Skill[]) => 
    this.skills = data)
  }

  delete(id : number){
    console.log("delete " + id)
    this.$skillAdminService.delete(id).subscribe(() => this.loadList());
  }
}
