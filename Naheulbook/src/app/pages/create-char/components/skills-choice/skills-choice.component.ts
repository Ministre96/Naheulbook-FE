import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-skills-choice',
  templateUrl: './skills-choice.component.html',
  styleUrls: ['./skills-choice.component.scss']
})
export class SkillsChoiceComponent {

  _character!: Character
  fg! : FormGroup
  
  @Output() validSkills = new EventEmitter<Character>();
  
  @Input() set character(char : Character) {
    this._character = char
  }

  get character(){
    return this._character
  }

  constructor(
    private $formBuilder : FormBuilder
  ){}

  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      skill1 : [],
      skill2 : [],
    })
  }

  selectSkill1(){
    if(this.fg.value.skill2){
      this.selectSkills()
    }
  }

  selectSkill2(){
    if(this.fg.value.skill1){
      this.selectSkills()
    }
  }

  selectSkills(){
    this._character.skills = [this.fg.value.skill1, this.fg.value.skill2]
    this.validSkills.emit(this._character)
  }

}
