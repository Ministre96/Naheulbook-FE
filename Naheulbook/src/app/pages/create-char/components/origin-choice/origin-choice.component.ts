import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/models/character.model';
import { Characteristic } from 'src/app/core/models/characteristic.model';
import { Origin } from 'src/app/core/models/origin.model';
import { OriginService } from 'src/app/core/services/origin.service';

@Component({
  selector: 'app-origin-choice',
  templateUrl: './origin-choice.component.html',
  styleUrls: ['./origin-choice.component.scss']
})
export class OriginChoiceComponent {

  
  _characteristics! : Characteristic[]
  fg! : FormGroup
  _origins! : Origin[]

  @Output() validOrigin = new EventEmitter<Origin>();

  @Input() set origins(origins : Origin[]) {
    this._origins = origins
  }

  get origin(){
    return this._origins
  }

  
  constructor(
    private $formBuilder : FormBuilder
  ){}


  ngOnInit(){
    this.initForm()
  }

  
  initForm(){
    this.fg = this.$formBuilder.group({
      origin : []
    })
  }


  selectOrigin(){
    this.validOrigin.emit(this.fg.value["origin"])
  }


}
