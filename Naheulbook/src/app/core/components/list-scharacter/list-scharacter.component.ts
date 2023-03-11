import { Component } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-list-scharacter',
  templateUrl: './list-scharacter.component.html',
  styleUrls: ['./list-scharacter.component.scss']
})
export class ListSCharacterComponent {

  list : Character[] = []

  constructor(
    private $characterService : CharacterService
  ){

  }
  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.$characterService.getAll().subscribe((data : Character[]) => {
      this.list = data
    })
  }
}
