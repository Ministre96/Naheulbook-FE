import { Component } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.scss']
})
export class ListSkillsComponent {
  skills! : Skill[]

  constructor(private $skillService : SkillService) {}

  ngOnInit(){
    this.loadList()
    setTimeout(() => {
      console.log(this.skills);
    }, 1000);
  }

  loadList(){
    this.$skillService.getAll().subscribe((data : Skill[]) => 
    this.skills = data)
  }
}
