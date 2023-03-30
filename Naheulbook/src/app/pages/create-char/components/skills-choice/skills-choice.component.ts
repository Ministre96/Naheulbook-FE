import { Component, Input } from '@angular/core';
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
  
  @Input() set character(char : Character) {
    this._character = char
    console.log(this._character)
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

  selectSkill1(){}
  selectSkill2(){}

}
