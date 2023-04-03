import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-scharacter',
  templateUrl: './list-scharacter.component.html',
  styleUrls: ['./list-scharacter.component.scss']
})
export class ListSCharacterComponent {

  _characters : Character[] = []

  @Input() set characters(characters : Character[]) {
    this._characters = characters
  }

  get character(){
    return this._characters
  }



}
