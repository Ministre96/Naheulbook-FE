import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { Characteristic } from 'src/app/core/models/characteristic.model';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent {

  @Output() validRoll = new EventEmitter<Character>();

  roll : Characteristic[] = [
    {"name" : "Courage"},
    {"name" : "Intelligence"},
    {"name" : "Charisme"},
    {"name" : "Adresse"},
    {"name" : "Force"}
  ]
  char : Character = {}
  maxRollDice6 : number = 6
  maxRollDice4 : number = 4
  numberDice : number = 5

  rollDice(){
    for(let i = 0; i < this.numberDice; i++){
      this.roll[i].value = Math.floor(Math.random() *this.maxRollDice6)+1
    }
    this.char.characteristics = this.roll
    this.char.gold = 20*(Math.floor(Math.random()*this.maxRollDice6)+1)
    this.char.fate = Math.floor(Math.random()*this.maxRollDice4)
    this.validRoll.emit(this.char)
  }
  
}
