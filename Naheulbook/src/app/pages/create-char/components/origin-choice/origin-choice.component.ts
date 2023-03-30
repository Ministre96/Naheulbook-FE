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
  origins! : Origin[]

  @Output() validOrigin = new EventEmitter<Origin>();

  @Input() set characteristics(chararacteristics : Characteristic[]) {
    this._characteristics = chararacteristics
    this.loadList()
  }

  get charac(){
    return this._characteristics
  }

  constructor(
    private $originService : OriginService,
    private $formBuilder : FormBuilder
  ){}


  ngOnInit(){
    this.loadList()
    this.initForm()
  }

  
  initForm(){
    this.fg = this.$formBuilder.group({
      origin : []
    })
  }


  loadList(){
    this.$originService.getAll().subscribe((data : Origin[]) => 
    this.origins = data)
    // this.restrictOrigin()
  }


  // restrictOrigin(){
  //   for(let i = 0; i < this.origins.length; i++){
  //     if(this.origins[i].requierement){
  //       for (let j = 0; j < this.origins[i].requierement!.length ;j++) {
  //         this.charac.forEach(element => {
  //           if(element.name == this.origins[i].requierement![j].name 
  //             && element.value! < this.origins[i].requierement![j].value!){
  //               this.origins.splice(i, 1)
  //           }
  //         });
  //       }
  //     }
  //   }
  // }


  selectOrigin(){
    this.validOrigin.emit(this.fg.value["origin"])
  }


}
